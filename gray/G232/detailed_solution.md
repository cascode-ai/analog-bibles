# Detailed solution - G232

Treat $Q_1$ as a common-emitter transconductor with an input divider, and $Q_2$ as a common-base current buffer whose only loss is the base current, i.e. a current gain of $\alpha$.

### Step 1 — Small-signal parameters

Both devices are forward-active at 1 mA, so $g_m=I_C/V_T$ and $r_\pi=\beta/g_m$:

$$
g_m=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.46\ \mathrm{mA/V},\qquad r_\pi=\frac{100}{38.46\ \mathrm{mA/V}}=2.6\ \mathrm{k\Omega},\qquad \alpha=\frac{\beta}{\beta+1}=0.990 .
$$

### Step 2 — Signal current of $Q_1$

The base of $Q_1$ draws current through $r_\pi$, so $R_S$ and $r_\pi$ divide the input:

$$
v_{be1}=v_i\,\frac{r_\pi}{R_S+r_\pi}=v_i\,\frac{2.6\ \mathrm{k\Omega}}{7.6\ \mathrm{k\Omega}}=0.342\,v_i,\qquad i_{c1}=g_mv_{be1}.
$$

With $r_o=\infty$, $i_{c1}$ does not depend on the collector voltage of $Q_1$.

### Step 3 — Current transfer through the common-base device

$Q_2$ has its base at ac ground, and its emitter is fed by $i_{c1}$. KCL at the emitter of $Q_2$ requires its emitter current to equal $i_{c1}$; a fraction $1/(\beta+1)$ of it leaves through the base to ground, and the rest reaches the collector:

$$
i_{c2}=\alpha\,i_{c1}=\frac{\beta}{\beta+1}\,i_{c1}.
$$

### Step 4 — Voltage gain

The collector current of $Q_2$ is drawn from the output node, so $v_o=-i_{c2}R_L$:

$$
\frac{v_o}{v_i}=-\alpha\,g_mR_L\,\frac{r_\pi}{R_S+r_\pi}=-(0.990)(38.46\ \mathrm{mA/V})(3\ \mathrm{k\Omega})(0.342)=-0.990\times39.5=-39.1 .
$$

The cascode leaves the gain essentially equal to that of the single common-emitter stage (−39.5), reduced only by $\alpha$.
