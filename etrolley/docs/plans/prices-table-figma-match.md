# Prices Comparison Table Figma Alignment Plan

Match the Prices page comparison table styling exactly with the Figma design.

## Proposed Changes

### 1. Remove Horizontal Row Borders
We will remove all horizontal grid lines inside the comparison table by clearing the bottom border of `.pricespage__feature-check` cells, leaving only the horizontal line below the plan header row.

### 2. Extend Leftmost Accent Line and Second Divider
We will add dynamic `::after` (1st line, left/right outer) and `::before` (2nd line, label divider) pseudo-elements on the last `.pricespage__feature-label` cell to extend both borders past the bottom of the table by `100px` and `50px` respectively.

### 3. Review Staggered Column Lines & RTL
We will ensure that all remaining internal vertical borders are properly staggered at the bottom to form a staircase going up:
- 3rd line (between col 1 and 2): stops 3 rows early.
- 4th line (between col 2 and 3): stops 6 rows early.
- 5th line (between col 3 and 4): stops 9 rows early.
- 6th line (outer right/left boundary): stops 12 rows early.

We will verify complete mirror symmetry for RTL.

## Verification Plan

### Manual Verification
- Compile and build using `npm run build`.
- Inspect the prices page in both LTR (`prices.html`) and RTL (`prices-ar.html`) to verify:
  - No horizontal lines between feature rows.
  - The leftmost line (1st line) extends 100px past the bottom, and the label divider (2nd line) extends 50px past the bottom.
  - The vertical column lines terminate progressively higher from left to right.

