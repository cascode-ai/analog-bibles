# Detailed solution - G155

With finite gain $a$ the summing node is no longer a perfect virtual ground: it sits at $-V_o/a$. Redo the charge balance for the node formed by Top and the summing node, from the end of $\phi_1$ to the end of $\phi_2$, keeping this small voltage, and solve the resulting first-order difference equation.

### Step 1 — Charge before and after the transfer

At the end of $\phi_1$, the top plate of $C_S$ is grounded with the bottom plate at $V_s$, and the summing node holds $-V_o[n]/a$ with the output at $V_o[n]$. When $M_2$ closes in $\phi_2$, Top joins the summing node, and this combined node is isolated (no dc path), so its charge is conserved. With the bottom plate of $C_S$ now grounded and the node at $-V_o[n+1]/a$:

$$
-C_SV_s+C_I\left(-\frac{V_o[n]}{a}-V_o[n]\right)
=C_S\left(-\frac{V_o[n+1]}{a}\right)+C_I\left(-\frac{V_o[n+1]}{a}-V_o[n+1]\right).
$$

The left side is the charge at the end of $\phi_1$, the right side at the end of $\phi_2$.

### Step 2 — Difference equation

Solving for $V_o[n+1]$:

$$
V_o[n+1]=\alpha V_o[n]+\beta V_s,\qquad
\alpha=\frac{C_I(1+1/a)}{C_I(1+1/a)+C_S/a},\qquad
\beta=\frac{C_S}{C_I(1+1/a)+C_S/a}.
$$

With $C_S=1$ pF, $C_I=5$ pF and $a=1000$:

$$
\alpha=\frac{5.005}{5.006}=0.99980,\qquad \beta=\frac{1}{5.006}=0.19976 .
$$

For $a\to\infty$, $\alpha=1$ and $\beta=C_S/C_I=0.2$, the ideal integrator. Now $\beta$ is smaller by a fraction of about $(1+C_S/C_I)/a=0.12\%$, and $\alpha<1$ means each stored value leaks slightly at every transfer.

### Step 3 — Output waveform

Starting from $V_o[0]=0$, the geometric sum gives

$$
V_o[n]=\beta V_s\,\frac{1-\alpha^n}{1-\alpha}.
$$

| Transfer $n$ | Finite gain ($a=1000$) | Infinite gain |
|---|---|---|
| 1 | 0.1998 V | 0.2 V |
| 2 | 0.3995 V | 0.4 V |
| 20 (by 20 µs) | 3.988 V | 4.0 V |

The output is still a staircase with one step per clock period, flat during $\phi_1$ because the summing node is isolated, and each step appears in $\phi_2$ as before. The steps are about 0.1 % smaller and shrink slowly (the twentieth is 0.1990 V), so at 20 µs the output is about 12 mV (0.3 %) below the ideal 4.0 V.

The integrator has become slightly lossy: its pole has moved from $z=1$ to $z=\alpha$, just inside the unit circle, and its dc gain is limited to $\beta/(1-\alpha)=a=1000$. If the clock kept running, the output would approach $aV_s=1000$ V, far beyond saturation. Over the 20 µs considered, the effect of $a=1000$ on the waveform is small.
