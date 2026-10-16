import type { Action } from "svelte/action";

type DragOrientation = "vertical" | "horizontal";

interface DragParams {
	orientation: DragOrientation;
	onDrag: (delta: number) => void;
	onDragEnd: () => void;
}

export const onDrag: Action<HTMLElement, DragParams> = (node, params) => {
	let dragStart: number | null = null;

	const axis = params.orientation === "vertical" ? "screenX" : "screenY";

	const mouseDown = (event: MouseEvent) => {
		if (event.button !== 0) {
			return;
		}

		event.preventDefault();
		dragStart = event[axis];
	};

	const mouseMove = (event: MouseEvent) => {
		event.stopPropagation();

		if (!dragStart) {
			return;
		}

		const delta = event[axis] - dragStart;
		params.onDrag(delta);
	};

	const mouseUp = () => {
		if (!dragStart) {
			return;
		}

		dragStart = null;
		params.onDragEnd();
	};

	node.addEventListener("mousedown", mouseDown);
	document.addEventListener("mousemove", mouseMove);
	document.addEventListener("mouseup", mouseUp);

	return {
		update(newParams) {
			params = newParams;
		},

		destroy() {
			node.removeEventListener("mousedown", mouseDown);
			document.removeEventListener("mousemove", mouseMove);
			document.removeEventListener("mouseup", mouseUp);
		},
	};
};
