# Detailed solution - R050

Approach: Treat the ring transistor as four ordinary transistors in parallel that share one drain, which gives its equivalent $W/L$. Then compute the drain-junction capacitance of each layout from its drain area and perimeter, at the same channel length $L$ and the same total (equivalent) width.

### Step 1 — How the ring transistor works

When $V_{GS} > V_{TH}$, an inversion layer forms under the *entire* ring gate, connecting the central drain to the surrounding source on all four sides of the drain square. Electrons flow inward from the source, under the gate, into the drain; the conventional current flows outward from drain to source.

Each side of the ring is an ordinary channel of width $\approx W$ (the length of the drain edge) and length $L$ (the width of the poly ring along the current flow). The four sides share the same gate, drain and source, so the ring device behaves like four identical transistors connected in parallel.

The poly strip that crosses the source to reach the gate contact forms a channel only between two parts of the source, which are at the same potential; it carries no drain current and only adds a little gate capacitance.

### Step 2 — Equivalent aspect ratio

The four parallel transistors have the same $V_{GS}$ and $V_{DS}$, so their saturation currents add:

$$I_D = 4\times\frac12\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH})^2 = \frac12\mu_nC_{ox}\,\frac{4W}{L}\,(V_{GS} - V_{TH})^2 .$$

Therefore

$$\left(\frac{W}{L}\right)_{eq} \approx \frac{4W}{L} :$$

the effective width is the inner perimeter of the ring, $4W$.

### Step 3 — Refinement: the four corners

The four $L\times L$ corner squares of the ring also carry some current, but less effectively than the straight sides, because the paths from the drain's corner points to the outer corners are longer. Two simple estimates bracket the true value.

- Lower bound: ignore the corners: If current flowed only in the four $W\times L$ rectangles, $(W/L)_{eq} = 4W/L$. The real current also spreads into the corners, so the real device conducts slightly better (forcing the current into restricted paths can only raise the resistance: Thomson's minimum-dissipation principle).
- Upper bound: square equipotentials: Assume the potential is constant on concentric squares. At distance $x$ from the drain edge ($0 \le x \le L$), a thin square shell has perimeter $4(W + 2x)$ and thickness $dx$; with $R_\square$ the channel sheet resistance it is a resistor
$$dR = R_\square\,\frac{dx}{4(W + 2x)} .$$
The shells are in series, so, with $\int dx/(W + 2x) = \tfrac12\ln(W + 2x)$,
$$R = \frac{R_\square}{4}\int_0^L\frac{dx}{W + 2x} = \frac{R_\square}{4}\cdot\frac12\Big[\ln(W + 2x)\Big]_0^L = \frac{R_\square}{8}\ln\!\left(\frac{W + 2L}{W}\right).$$
A rectangular channel has $R = R_\square\,L/W$, i.e. $W/L = R_\square/R$, so by the same definition
$$\left(\frac{W}{L}\right)_{eq} = \frac{R_\square}{R} = \frac{8}{\ln(1 + 2L/W)} .$$
An assumed potential pattern can only *overestimate* the conductance (by Dirichlet's minimum-energy principle the true potential minimizes the dissipated power), so this is an upper bound.

For $L \ll W$, use $\ln(1 + \epsilon) \approx \epsilon - \epsilon^2/2$ with $\epsilon = 2L/W$:

$$\frac{8}{\ln(1 + 2L/W)} \approx \frac{8}{(2L/W)(1 - L/W)} \approx \frac{4W}{L}\left(1 + \frac{L}{W}\right) = \frac{4W}{L} + 4 = \frac{4(W + L)}{L}.$$

So

$$\frac{4W}{L} \;\le\; \left(\frac{W}{L}\right)_{eq} \;\le\; \frac{8}{\ln(1 + 2L/W)} \approx \frac{4W}{L} + 4 .$$

The upper form, $4(W + L)/L$, equals the *mean* perimeter of the ring over $L$. With $W = 10L$ the bounds are 40 and 43.9, so the corners change the result by less than 10 %. For $W \gg L$, $(W/L)_{eq} \approx 4W/L$. The same geometric factor applies in saturation as in the linear region, since in the gradual-channel picture the channel current obeys the same two-dimensional continuity equation at any bias.

### Step 4 — Capacitance model and fair normalization

The drain–bulk capacitance is $C_{DB} = (\text{drain area})\,C_j + (\text{drain perimeter})\,C_{jsw}$. For a fair comparison all three layouts must give the same current, i.e. the same $(W/L)_{eq}$; with the same $L$ they need the same total width,

$$W_{eq} = 4W .$$

$E$ is the lateral dimension of a source/drain region (the distance from the gate edge to the end of the diffusion), not a channel length.

### Step 5 — Ring device

The drain is the $W\times W$ square:

$$\text{area} = W^2, \qquad \text{perimeter} = 4W,$$

$$C_{DB,ring} = W^2C_j + 4W\,C_{jsw}.$$

### Step 6 — Straight device ([Fig. 2])

A single gate finger of width $W_{eq} = 4W$, whose drain is a rectangle $W_{eq}$ long (along the gate) and $E$ wide:

$$\text{area} = W_{eq}E = 4WE, \qquad \text{perimeter} = 2(W_{eq} + E) = 8W + 2E,$$

$$C_{DB,straight} = 4WE\,C_j + 2(4W + E)\,C_{jsw}.$$

### Step 7 — Folded device ([Fig. 3])

Two gate fingers, each of width $W_{eq}/2 = 2W$, share one central drain, a rectangle $2W$ long and $E$ wide:

$$\text{area} = \frac{W_{eq}}{2}E = 2WE, \qquad \text{perimeter} = 2\left(\frac{W_{eq}}{2} + E\right) = 4W + 2E,$$

$$C_{DB,folded} = 2WE\,C_j + 2(2W + E)\,C_{jsw}.$$

Folding halves the drain area because one drain region serves two channels.

### Step 8 — Compare the three layouts

| Layout (same $W_{eq} = 4W$) | Drain area | Drain perimeter | $C_{DB}$ | $C_{DB}$ at $W = E$ |
|---|---|---|---|---|
| Ring | $W^2$ | $4W$ | $W^2C_j + 4WC_{jsw}$ | $E^2C_j + 4EC_{jsw}$ |
| Straight | $4WE$ | $8W + 2E$ | $4WEC_j + (8W + 2E)C_{jsw}$ | $4E^2C_j + 10EC_{jsw}$ |
| Folded | $2WE$ | $4W + 2E$ | $2WEC_j + (4W + 2E)C_{jsw}$ | $2E^2C_j + 6EC_{jsw}$ |

At $W \approx E$ (a drain square just large enough to hold a contact):

- Bottom plate: the ring has $E^2$, against $4E^2$ (straight) and $2E^2$ (folded), i.e. 1/4 of the straight device and 1/2 of the folded device.
- Perimeter: the ring has $4E$, against $10E$ and $6E$.
- Total: the ratio ring/straight lies between $1/4$ (bottom plate dominant) and $4/10 = 2/5$ (sidewall dominant), and the ratio ring/folded between $1/2$ and $4/6 = 2/3$, depending on $C_{jsw}/(EC_j)$.

General $W$: Subtracting the ring's capacitance from the others:

$$
\begin{aligned}
C_{DB,folded} - C_{DB,ring} &= (2WE - W^2)C_j + (4W + 2E - 4W)C_{jsw} = W(2E - W)\,C_j + 2E\,C_{jsw},\\
C_{DB,straight} - C_{DB,ring} &= (4WE - W^2)C_j + (8W + 2E - 4W)C_{jsw} = W(4E - W)\,C_j + (4W + 2E)\,C_{jsw}.
\end{aligned}
$$

Both differences are nonnegative for $W \le 2E$. At $W=2E$, the ring ties the folded layout if sidewall capacitance is zero. Setting the first difference to zero gives the exact crossover with the folded device:

$$W^2 - 2EW - \frac{2EC_{jsw}}{C_j} = 0 \;\Rightarrow\; W_c = E + \sqrt{E^2 + \frac{2EC_{jsw}}{C_j}} \;(\ge 2E).$$

Against the straight device the crossover is near $W \approx 4E$, or somewhat above it once sidewalls are counted.

Per unit of effective width: Dividing each capacitance by $W_{eq} = 4W$:

$$
\begin{aligned}
\frac{C_{DB,ring}}{W_{eq}} &= \frac{W}{4}C_j + C_{jsw},\\
\frac{C_{DB,straight}}{W_{eq}} &= E\,C_j + 2C_{jsw} + \frac{E}{2W}C_{jsw},\\
\frac{C_{DB,folded}}{W_{eq}} &= \frac{E}{2}C_j + C_{jsw} + \frac{E}{2W}C_{jsw}.
\end{aligned}
$$

For the straight and folded devices this is essentially constant. For the ring it *grows* with $W$, because the drain area grows as $W^2$ while the width grows only as $4W$. A wide transistor should therefore be built from several small rings in parallel, each with $W \approx E$, not from one large ring.

### Step 9 — Remarks and costs

- Sidewall convention: The model above counts the whole drain perimeter with $C_{jsw}$. If the edge facing the gate is excluded, subtract $4WC_{jsw}$ from every layout: all three have a gate-side drain edge of total length $W_{eq} = 4W$, so the differences and the conclusion are unchanged. The reduced forms are $W^2C_j$, $4WEC_j + (4W + 2E)C_{jsw}$ and $2WEC_j + 2EC_{jsw}$.
- Costs of the ring: The source surrounds the device, so the total area and the source junction capacitance are large (harmless when the source is grounded). The corners make the exact $W/L$ less predictable, and the device is asymmetric: the small inner terminal must be used as the drain, the sensitive node.

### Result

- Operation: The ring gate induces a channel all around the central drain. Current flows between the drain and the surrounding source on all four sides, like four transistors of width $\approx W$ and length $L$ in parallel sharing one drain.
- Equivalent aspect ratio:
$$\left(\frac{W}{L}\right)_{eq} \approx \frac{4W}{L}.$$
Including the corners, $4W/L \le (W/L)_{eq} \le 8/\ln(1 + 2L/W) \approx 4(W + L)/L$.
- Drain junction capacitance at equal equivalent width $W_{eq} = 4W$:
$$C_{ring} = W^2C_j + 4WC_{jsw},\quad C_{straight} = 4WEC_j + 2(4W + E)C_{jsw},\quad C_{folded} = 2WEC_j + 2(2W + E)C_{jsw}.$$
- Comparison: For $W \approx E$ the ring has about 1/4 of the straight device's and 1/2 of the folded device's bottom-plate capacitance, and the smallest perimeter. Its total drain capacitance is 1/4–2/5 of the straight device's and 1/2–2/3 of the folded device's. It beats the folded layout for any $W \le 2E$ (exact crossover $E + \sqrt{E^2 + 2EC_{jsw}/C_j}$) and the straight layout up to $W \approx 4E$.
- Scaling: Because the ring's drain area grows as $W^2$, large widths should use several small rings in parallel.

**Common mistake:** Taking the equivalent aspect ratio as $W/L$ (one side counted) or $W/(4L)$ (the four sides in series). The four channel segments connect the *same* drain to the *same* source, so they are in parallel and their widths add: $4W/L$.

**Common mistake:** Comparing the layouts at the same drawn $W$, or using $E$ as the channel length of the straight or folded device. The comparison is only meaningful at equal current-driving capability (same $L$, same $W_{eq} = 4W$), and $E$ is a source/drain dimension.

**Common mistake:** Concluding that the ring has *larger* drain capacitance "because it is a big square". At the small $W$ where it is used ($W \lesssim 2E$) it has the smallest drain area and perimeter of the three; its disadvantage appears only for a single very large ring.
