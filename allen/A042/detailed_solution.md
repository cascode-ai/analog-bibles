# Detailed solution - A042

With the oxide uniform and fringing neglected, each capacitance is proportional to the area of its square top plate. The worst mismatch occurs when the two plates deviate in opposite directions; require that ratio to stay within 0.1 % and solve for the drawn side.

### Step 1 — Capacitance of a square plate

For a drawn side $d$ and an edge error $\delta$ on the side length, $|\delta|\le0.05\ \mu$m,

$$
C=C_{area}\,(d+\delta)^2 ,
$$

where $C_{area}$ is the capacitance per unit area, identical for both capacitors.

### Step 2 — Worst-case mismatch condition

The deviations are independent, so the worst case has one capacitor at $d+0.05\ \mu$m and the other at $d-0.05\ \mu$m. The requirement is

$$
\frac{C_1}{C_2}=\left(\frac{d+0.05\ \mu\mathrm m}{d-0.05\ \mu\mathrm m}\right)^2\le1.001
\quad\Rightarrow\quad
\frac{d+0.05\ \mu\mathrm m}{d-0.05\ \mu\mathrm m}\le\sqrt{1.001}=1.0005 .
$$

### Step 3 — Solve for the side

$$
d\ge\frac{(0.05\ \mu\mathrm m)(1+1.0005)}{1.0005-1}=200.1\ \mu\mathrm m .
$$

The small-error form gives the same result more transparently: each capacitor has a fractional error up to $2\delta/d$ (the area depends on the side squared), and the two errors add in the worst case, so

$$
\frac{\Delta C}{C}\approx\frac{4\delta}{d}=\frac{0.2\ \mu\mathrm m}{d}\le0.001
\quad\Rightarrow\quad d\ge200\ \mu\mathrm m .
$$

### Step 4 — Result

Each capacitor must be about $200\ \mu\mathrm m\times200\ \mu\mathrm m\approx4\times10^4\ \mu\mathrm m^2$, which at a typical 1 fF/µm² is about 40 pF. The requirement is severe because the edge error is a fixed length: the relative error falls only as $1/d$. If the 0.1 % applied to a single capacitor's deviation instead of the pair's worst-case ratio, $2\delta/d\le0.001$ would give $d\ge100\ \mu$m. In practice, ratio matching uses identical unit capacitors, so that edge errors scale with the ratio and largely cancel.
