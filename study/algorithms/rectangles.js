// The rectangles don’t overlap if any of these are true:

// One left edge is to the right of the other right edge.
// One top edge is below the other bottom edge.
function rectanglesOverlap(topLeft1, bottomRight1, topLeft2, bottomRight2) {
	if (topLeft1[0] > bottomRight2[0] || topLeft2[0] > bottomRight1[0]) {
		return false;
	}
	if (topLeft1[1] > bottomRight2[1] || topLeft2[1] > bottomRight1[1]) {
		return false;
	}
	return true;
}