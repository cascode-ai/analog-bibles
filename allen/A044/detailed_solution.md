# Detailed solution - A044

Model each top plate as a set of unit squares, count its outline by shared sides, and show that the outline is always twice the area. Then show why a fixed area-to-perimeter ratio makes the capacitance ratio equal the area ratio.

### Step 1 — Why the area-to-perimeter ratio matters

A plate of area $A$ and perimeter $P$ has an area (parallel-plate) term and an edge term made of fringing field and the edge-etch error:

$$
C=C_{area}A+C_{perimeter}P,
$$

with $C_{area}$ in F/unit² and $C_{perimeter}$ in F/unit. For two capacitors,

$$
\frac{C_2}{C_1}=\frac{C_{area}A_2+C_{perimeter}P_2}{C_{area}A_1+C_{perimeter}P_1}.
$$

If $P_1/A_1=P_2/A_2=k$, this becomes $C_2/C_1=A_2(C_{area}+kC_{perimeter})/[A_1(C_{area}+kC_{perimeter})]=A_2/A_1$, independent of $C_{perimeter}$. The same holds for an edge-etch error $\delta$ (each edge moving inward by $\delta$): to first order $\Delta A\approx-\delta P=-k\delta A$, the same fraction of every plate. So the goal is a layout in which $P/A$ is the same for every capacitor, whatever its area.

### Step 2 — Perimeter of a figure built from unit squares

Use the unit-square side $s$ as the length unit. A figure of $n$ unit squares has $4n$ unit edges in total. Every side shared by two squares is interior, and it removes two unit edges (one from each square) from the outline, so

$$
P=4n-2m,
$$

where $m$ is the number of shared sides. Holes count: the outline of the hole inside the head loop is also plate edge, and the formula includes it automatically.

For a one-unit-wide path with no 2×2 block, each square shares sides only with its neighbours along the path:

- a simple open chain of $n$ squares has $m=n-1$, so $P=2n+2$ and $A/P=n/(2n+2)$, which depends on $n$;
- each closed loop adds one shared side. The Yiannoulos path starts with one loop (the 3×3 ring of 8 squares around the hole), so $m=n$ and

$$
P=4n-2n=2n=2A,\qquad \frac AP=\frac12\ \text{unit}=\frac s2.
$$

The loop is therefore essential: it exactly cancels the two extra end edges of an open strip, so $P=2A$ for every length of path.

### Step 3 — Fractional last segment

A noninteger area is obtained by ending the path with a segment of length $f<1$ and full width 1, placed along the path direction. It adds area $f$ and its two long sides $2f$ to the outline; the end edge only moves outward, so

$$
\Delta A=f,\qquad \Delta P=2f=2\Delta A .
$$

The relation $P=2A$ is preserved, so any area, not just an integer number of units, keeps $A/P=1/2$ unit.

### Step 4 — Check on the two structures of [Fig. 1]

Counting the squares and shared sides in the figure (the ring contributes 8 squares and 8 shared sides; each further square along the path adds one square and one shared side):

| Structure | Full squares $n$ | Shared sides $m$ | $P_n=4n-2m$ | Fraction | $A$ | $P$ | $A/P$ |
|---|---|---|---|---|---|---|---|
| Left | 12 | 12 | 24 | $f=0.5$ | 12.5 | 25 | 0.5 |
| Right | 18 | 18 | 36 | none | 18 | 36 | 0.5 |

For the left plate, $P=24+2(0.5)=25$ units. Both plates have $A/P=1/2$ unit, so by Step 1

$$
\frac{C_2}{C_1}=\frac{A_2(C_{area}+2C_{perimeter})}{A_1(C_{area}+2C_{perimeter})}=\frac{18}{12.5}=1.44,
$$

exactly the area ratio, with fringe and etch effects cancelled even though the ratio is not an integer. An array of identical unit squares gives the same cancellation only for integer ratios; the path layout extends it to any ratio. The vertical dummy bars make the etch environment of every plate edge the same, so $\delta$ is the same for both plates, as assumed.
