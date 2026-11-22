# Detailed solution - A051

Evaluate both equations at the transition $v_{DS}(\text{sat})=v_{GS}-V_T$, identify the factor by which they differ, and rewrite the channel-length-modulation term so that it equals 1 at the transition while keeping the same slope above it.

### Step 1 — Size of the mismatch at the transition

Write $V_{ov}=v_{GS}-V_T$, so $v_{DS}(\text{sat})=V_{ov}$. The nonsaturation equation at its upper limit gives

$$
i_D\big|_{\text{nonsat}}=K'\frac WL\Big[V_{ov}-\frac{V_{ov}}{2}\Big]V_{ov}=\frac{K'W}{2L}V_{ov}^2 ,
$$

while the saturation equation at its lower limit gives

$$
i_D\big|_{\text{sat}}=\frac{K'W}{2L}V_{ov}^2\big(1+\lambda V_{ov}\big).
$$

The current therefore jumps by the relative amount $\lambda v_{DS}(\text{sat})$ at the boundary, for example 4% for $\lambda=0.04\ \mathrm{V^{-1}}$ and $v_{DS}(\text{sat})=1$ V. A simulator iterating near the boundary sees a discontinuous $i_D(v_{DS})$, which can stall Newton–Raphson convergence.

### Step 2 — Measure channel-length modulation from the saturation point

The channel-length-modulation factor only has to describe the extra current caused by the drain voltage beyond pinch-off. Measuring it from $v_{DS}(\text{sat})$ instead of from zero gives

$$
i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2\Big[1+\lambda\big(v_{DS}-v_{DS}(\text{sat})\big)\Big],\qquad v_{DS}\ge v_{DS}(\text{sat})=v_{GS}-V_T .
$$

### Step 3 — Check at the transition and above it

At $v_{DS}=v_{DS}(\text{sat})$ the bracket equals 1, so

$$
i_D=\frac{K'W}{2L}V_{ov}^2=i_D\big|_{\text{nonsat}},
$$

and the two equations meet. Above the transition the output conductance is unchanged:

$$
\frac{\partial i_D}{\partial v_{DS}}=\lambda\frac{K'W}{2L}(v_{GS}-V_T)^2 ,
$$

so the channel-length-modulation behaviour of the original saturation equation is kept. Only the current is made continuous: the slope is still discontinuous, zero at the end of the nonsaturation equation and $\lambda\,K'W V_{ov}^2/(2L)$ at the start of the saturation equation.

An equivalent change is to normalize the original factor by its value at the transition,

$$
i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2\,\frac{1+\lambda v_{DS}}{1+\lambda v_{DS}(\text{sat})},
$$

which also equals $K'WV_{ov}^2/(2L)$ at $v_{DS}=v_{DS}(\text{sat})$; its slope above the transition is smaller by the factor $1/(1+\lambda V_{ov})$.
