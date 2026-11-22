# Detailed solution - A046

Describe each unit bar by a nominal resistance plus the errors that real layouts suffer (a linear gradient, an edge-of-array error, orientation and contact effects), trace which bars form $R$ and $2R$ in each layout, and evaluate the ratio. The best layout is the one in which every error affects $R$ and $2R$ in the same proportion.

### Step 1 — Error model for a ratio of unit bars

Build both resistors from identical unit bars of resistance $r$, so nominally $2R/R=2r/r=2$. A real bar $i$ deviates by

$$
r_i=r\,(1+g\,x_i+\varepsilon_i),
$$

where $g$ is a linear gradient across the layout (sheet resistance, width), $x_i$ the bar's position, and $\varepsilon_i$ an error that depends on the bar's surroundings: an outermost bar without a neighbour etches differently from an interior one. A further error arises when bars have different orientations (etch, lithography and stress depend on direction) or when contact and interconnect resistance does not scale with the number of units. The ratio is exact only when $R$ and $2R$ have the same centroid (cancelling $g$), the same surroundings (cancelling $\varepsilon$), the same orientation, and series contact resistance in the same 2:1 proportion.

### Step 2 — Gradient: sequential versus common-centroid order

For three vertical bars at $x=-1,0,+1$ with no edge error:

$$
\begin{aligned}
\text{(b), (c): } R=r_{-1},\ 2R=r_0+r_{+1}&\ \Rightarrow\ \frac{2R}{R}=\frac{2+g}{1-g}\approx2+3g,\\
\text{(d), (e): } R=r_0,\ 2R=r_{-1}+r_{+1}&\ \Rightarrow\ \frac{2R}{R}=\frac{2r}{r}=2 .
\end{aligned}
$$

Placing $R$ in the centre, between the two halves of $2R$, gives the two resistors a common centroid, so the linear gradient cancels exactly. In (b) and (c) the order is sequential ($R$ at the A end, then the two $2R$ bars), and the ratio error is first order in $g$.

### Step 3 — Edge error: the role of dummy bars

Let an outermost active bar (no neighbour on one side) have $r(1+\varepsilon)$ and an interior bar $r$:

$$
\begin{aligned}
\text{(d): } \frac{2R}{R}&=\frac{2r(1+\varepsilon)}{r}=2(1+\varepsilon),\\
\text{(b): } \frac{2R}{R}&=\frac{r+r(1+\varepsilon)}{r(1+\varepsilon)}=\frac{2+\varepsilon}{1+\varepsilon}\approx2-\varepsilon .
\end{aligned}
$$

In (d) both outer bars belong to $2R$, so its edge error is about twice that of (b). Layouts (c) and (e) add dummy bars at both ends; every active bar then has identical neighbours, $\varepsilon_i$ is the same for all, and the edge error cancels. Thus (d) cancels the gradient but not the edge error, (b) neither, and whether (d) is better than (b) or (c) depends on which error dominates.

### Step 4 — Layouts (a) and (f)

**(a)** Six units in series: $R$ is the two inner vertical bars, $2R$ the two outer vertical bars plus the top and bottom horizontal bars. The arrangement is roughly common-centroid, and the contact count scales 2:1 (8 contacts on the $2R$ side, 4 on the $R$ side). However, $2R$ contains horizontal and vertical bars while $R$ is all vertical, so the layout is not orientation-invariant; inner and outer bars have different surroundings; there are no dummies; and the long, unequal metal routing adds series resistance that is not ratioed.

**(f)** One strip of width $W$ and sheet resistance $R_\square$ with a tap at $2x$ from B and $x$ from A. The ideal strip gives exactly 2:1, but each section also contains one end contact (and its contact-to-strip transition) of resistance $R_c$:

$$
\frac{R_{B\text{-}tap}}{R_{tap\text{-}A}}=\frac{2xR_\square/W+R_c}{xR_\square/W+R_c}<2 .
$$

$R_c$ does not scale with length, the tap contact itself disturbs the current flow and makes the effective tap position uncertain, and the two sections have different centroids, so a gradient along the strip changes the ratio directly.

### Step 5 — Verdict

| Layout | Unit matched | Common centroid | Same orientation | Dummies | Main defect |
|---|---|---|---|---|---|
| (a) | yes | roughly | no | no | mixed orientation, unequal surroundings and routing |
| (b) | yes | no | yes | no | gradient error $\approx3g$, edge error $\approx-\varepsilon$ |
| (c) | yes | no | yes | yes | sequential order; narrow dog-bone bodies raise width sensitivity |
| (d) | yes | yes | yes | no | outer bars ($2R$) see a different edge: error $\approx2\varepsilon$ |
| (e) | yes | yes | yes | yes | none of the above |
| (f) | no | no | — | no | end contacts not ratioed, gradient along strip |

All six layouts are nominally 2:1 for ideal identical material; they differ in how process errors enter. Layout **(e)** is the best: three identical unit bars with $R$ (the bar connected to A) in the centre and $2R$ formed by the two outer bars in series, so it is unit-matched, common-centroid (gradients cancel), uses one orientation, and has dummy bars at both ends so every active bar has the same surroundings (edge errors cancel).
