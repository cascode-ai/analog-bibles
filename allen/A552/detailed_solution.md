# Detailed solution - A552

The modulator in [Fig. 1] is a cascade (MASH) of three identical first-order loops. Solve one loop in general, chain the stages through their error signals, and then combine the outputs through the differentiators on the right. Each quantizer is an additive noise source $Q_i$.

### Step 1 — One first-order stage

Let stage $i$ have input $U_i$, integrator output $V_i$ and output $Y_i=V_i+Q_i$. The integrator $1/(1-z^{-1})$ has no delay, and the feedback is $z^{-1}Y_i$:

$$
V_i=\frac{U_i-z^{-1}Y_i}{1-z^{-1}} .
$$

Substituting $V_i=Y_i-Q_i$ and multiplying by $1-z^{-1}$:

$$
(1-z^{-1})(Y_i-Q_i)=U_i-z^{-1}Y_i
\;\Rightarrow\;
Y_i=U_i+(1-z^{-1})Q_i,\qquad V_i=Y_i-Q_i .
$$

### Step 2 — Inputs and outputs of the three stages

Each lower stage is driven by the summer that forms $V_i-Y_i$ (integrator output minus quantizer output), which equals $-Q_i$:

$$
U_1=X,\qquad U_2=V_1-Y_1=-Q_1,\qquad U_3=V_2-Y_2=-Q_2 .
$$

Applying Step 1 to each stage:

| Stage | Input $U_i$ | Output $Y_i$ |
|---|---|---|
| 1 | $X$ | $X+(1-z^{-1})Q_1$ |
| 2 | $-Q_1$ | $-Q_1+(1-z^{-1})Q_2$ |
| 3 | $-Q_2$ | $-Q_2+(1-z^{-1})Q_3$ |

### Step 3 — Combine the outputs

On the right, $Y_2$ passes through one $1-z^{-1}$ block and $Y_3$ through two in series before all are summed:

$$
\begin{aligned}
Y&=Y_1+(1-z^{-1})Y_2+(1-z^{-1})^2Y_3\\
&=X+(1-z^{-1})Q_1-(1-z^{-1})Q_1+(1-z^{-1})^2Q_2-(1-z^{-1})^2Q_2+(1-z^{-1})^3Q_3\\
&=X(z)+(1-z^{-1})^3Q_3(z).
\end{aligned}
$$

Each differentiator gives the error fed to the next stage exactly the shaping it received in the previous stage, so $Q_1$ and $Q_2$ cancel term by term.

### Step 4 — Noise transfer function

Only the last quantizer's noise reaches the output, so

$$
NTF_Q(z)=\frac{Y(z)}{Q_3(z)}=(1-z^{-1})^3 ,
$$

a triple zero at $z=1$: third-order noise shaping, with a signal transfer function of 1. Iterating the diagram sample by sample with random $X$, $Q_1$, $Q_2$, $Q_3$ reproduces this result to rounding error. Since each stage is a stable first-order loop, the cascade reaches third order without the stability problems of a single third-order loop; the cancellation, however, relies on the analog integrators matching the digital $1-z^{-1}$ filters.
