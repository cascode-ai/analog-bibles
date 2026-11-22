# Detailed solution - G114

A curve is tangent to a line where the two share a point and have equal slopes. Write the load line by its intercepts, differentiate the hyperbola, and solve the tangency conditions; then confirm the result by maximizing $I_cV_{ce}$ along the line.

### Step 1 — Load line and hyperbola slopes

Let the load line cross the $V_{ce}$ axis at $V_0>0$ and the $I_c$ axis at $I_0>0$:

$$
I_c=I_0\left(1-\frac{V_{ce}}{V_0}\right),\qquad \frac{dI_c}{dV_{ce}}\bigg|_{\text{line}}=-\frac{I_0}{V_0}.
$$

On the power hyperbola $I_c=P/V_{ce}$ (with $P>0$, first quadrant), the slope at any point is

$$
\frac{dI_c}{dV_{ce}}\bigg|_{\text{hyperbola}}=-\frac{P}{V_{ce}^2}=-\frac{I_cV_{ce}}{V_{ce}^2}=-\frac{I_c}{V_{ce}},
$$

that is, the negative of the slope of the ray from the origin to that point.

### Step 2 — Tangency conditions

At the contact point $(V_{ce},I_c)$ the slopes are equal, $I_c/V_{ce}=I_0/V_0$, so $I_c=I_0V_{ce}/V_0$. The point also lies on the load line; substituting,

$$
\frac{I_0V_{ce}}{V_0}=I_0\left(1-\frac{V_{ce}}{V_0}\right)\ \Rightarrow\ \frac{2V_{ce}}{V_0}=1\ \Rightarrow\ V_{ce}=\frac{V_0}{2},\qquad I_c=\frac{I_0}{2}.
$$

The midpoint of the segment between $(V_0,0)$ and $(0,I_0)$ is exactly $(V_0/2,\ I_0/2)$, which proves the claim. The tangent hyperbola is the one with $P=I_0V_0/4$.

### Step 3 — Equivalent view: maximum dissipation on the line

Along the load line the product $P(V_{ce})=I_cV_{ce}$ is

$$
P(V_{ce})=I_0V_{ce}\left(1-\frac{V_{ce}}{V_0}\right),\qquad \frac{dP}{dV_{ce}}=I_0\left(1-\frac{2V_{ce}}{V_0}\right)=0\ \Rightarrow\ V_{ce}=\frac{V_0}{2},
$$

with $d^2P/dV_{ce}^2=-2I_0/V_0<0$, so this is a maximum, $P_{\max}=I_0V_0/4$. Hyperbolas with $P>P_{\max}$ miss the line, those with $P<P_{\max}$ cut it at two points, and only $P=P_{\max}$ touches it, at the midpoint. Hence the midpoint of any load line is also its point of maximum instantaneous device dissipation.
