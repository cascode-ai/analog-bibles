# Detailed solution - G143

With $M_2$ cut off, the output current comes from $M_1$ alone. Combine KCL at the output with the square law of $M_1$, in which the gate voltage is set by the error amplifier; this gives a quadratic for $V_o$. The root is chosen from the conduction condition of $M_1$.

### Step 1 — KCL with $M_2$ off

With $I_{d2}=0$, $I_o+I_{d1}=0$ and $I_o=V_o/R_L$. $M_1$ is active, so

$$
\frac{V_o}{R_L}=-I_{d1}=\frac{k'}{2}\frac WL\left(V_{gs1}+V_t\right)^2 .
$$

### Step 2 — Gate drive from the error amplifier

Substituting the amplifier relation for $V_{gs1}$:

$$
V_{gs1}+V_t=-V_{ov}+A\left(V_o-V_i+V_{OSP}\right)=A\left(V_o-V'\right),\qquad V'\equiv V_i+\frac{V_{ov}}{A}-V_{OSP}.
$$

Let $\beta=k'(W/L)$ and $u=V_o-V'$. Step 1 becomes

$$
\frac{u+V'}{R_L}=\frac{\beta}{2}A^2u^2\ \Rightarrow\ \frac{\beta A^2}{2}u^2-\frac{u}{R_L}-\frac{V'}{R_L}=0 .
$$

### Step 3 — Solve the quadratic

$$
u=\frac{\dfrac1{R_L}\pm\sqrt{\dfrac1{R_L^2}+\dfrac{2\beta A^2V'}{R_L}}}{\beta A^2}.
$$

**Root selection.** The p-channel $M_1$ conducts only when $V_{gs1}<V_{t1}=-V_t$, i.e. $V_{gs1}+V_t=Au<0$; with $A>0$ this requires $u<0$. The square root exceeds $1/R_L$ whenever $V'>0$, so the plus sign gives $u>0$: that root belongs to the mirror-image branch of the parabola $(V_{gs1}+V_t)^2$ where the square law does not apply. The minus sign gives $u<0$ and is the physical solution.

### Step 4 — Result

With $V_o=V'+u$ and the minus root,

$$
V_o=V_i+\frac{V_{ov}}{A}-V_{OSP}+\frac{1}{k'\frac WLA^2R_L}-\frac{1}{k'\frac WLA^2}\sqrt{\frac1{R_L^2}+2k'\frac WL\frac{A^2}{R_L}\left(V_i+\frac{V_{ov}}{A}-V_{OSP}\right)},
$$

which is the stated relation. For $\beta A^2R_LV'\gg1$ the last two terms reduce to about $-\sqrt{2V'/(\beta A^2R_L)}$: $V_o$ follows $V_i$ with unity slope, offset by $V_{ov}/A-V_{OSP}$, and with an error term that shrinks as the loop gain $A$ grows.
