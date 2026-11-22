# Detailed solution - A551

Solve each first-order loop for its output and its integrator output, feed the second stage with the first stage's quantization error, and then combine the two stage outputs through the digital filters at the bottom of [Fig. 1]. The quantizers are modelled as additive noise sources (the dashed summers).

### Step 1 — First stage

Let $V_1$ be the output of the first integrator $1/(1-z^{-1})$. Its input is $X-z^{-1}Y_1$, and the quantizer adds $Q_1$:

$$
V_1=\frac{X-z^{-1}Y_1}{1-z^{-1}},\qquad Y_1=V_1+Q_1 .
$$

Multiplying the first relation by $1-z^{-1}$ and substituting $V_1=Y_1-Q_1$:

$$
(1-z^{-1})(Y_1-Q_1)=X-z^{-1}Y_1
\;\Rightarrow\;
Y_1=X+(1-z^{-1})Q_1,\qquad V_1=X-z^{-1}Q_1 .
$$

### Step 2 — Input of the second stage

The middle summer subtracts the delayed output from the delayed integrator output:

$$
U_2=z^{-1}V_1-z^{-1}Y_1=z^{-1}(V_1-Y_1)=-z^{-1}Q_1 .
$$

So the second stage sees only the (delayed, inverted) quantization error of the first stage, not the signal.

### Step 3 — Second stage

The second loop has the same structure as the first, so with $U_2$ in place of $X$:

$$
Y_2=U_2+(1-z^{-1})Q_2=-z^{-1}Q_1+(1-z^{-1})Q_2 .
$$

### Step 4 — Output combination and order

The output network delays $Y_1$ by $z^{-1}$ and differentiates $Y_2$ by $1-z^{-1}$:

$$
\begin{aligned}
Y_o&=z^{-1}Y_1+(1-z^{-1})Y_2\\
&=z^{-1}X+z^{-1}(1-z^{-1})Q_1-(1-z^{-1})z^{-1}Q_1+(1-z^{-1})^2Q_2\\
&=z^{-1}X(z)+(1-z^{-1})^2Q_2(z).
\end{aligned}
$$

The two $Q_1$ terms are equal and opposite, so the first stage's noise cancels; the extra $z^{-1}$ on $Y_1$ is there to match the delay of $Q_1$ through the second path. The signal passes with a pure one-sample delay, and the remaining noise $Q_2$ is shaped by $(1-z^{-1})^2$, a double zero at dc. The modulator is therefore **second order** (a 1-1 MASH cascade of two first-order loops). Iterating the block diagram sample by sample with random $X$, $Q_1$, $Q_2$ reproduces this expression to rounding error.
