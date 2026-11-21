# Detailed solution - G340

Write the loop gain with a lag-lead filter $F(s)=(1+s/\omega_2)/(1+s/\omega_1)$, impose the two crossover conditions (unity magnitude and $-135°$ phase at $\omega_c=100$ rad/s) exactly, solve them for the pole and zero, and then choose an R-C network that realizes those time constants.

### Step 1 — Loop gain with the pole-zero filter

In the phase domain the VCO integrates frequency into phase, so the loop gain of the locked PLL is

$$
T(s)=\frac{K_OK_D\,F(s)}{s}=\frac{K_v}{s}\,\frac{1+s/\omega_2}{1+s/\omega_1},\qquad
K_v=K_OK_D=(10^3\ \mathrm{rad/(V\cdot s)})(1\ \mathrm{V/rad})=1000\ \mathrm{s^{-1}} .
$$

$F(0)=1$ as required. Without a filter the loop would cross over at $K_v=1000$ rad/s; to bring the crossover down to 100 rad/s the filter must attenuate, so the pole lies below the zero ($\omega_1<\omega_2$), a lag network. The integrator contributes $-90°$, the pole a further lag and the zero a lead that limits the total to $-135°$.

### Step 2 — Phase condition

Define the normalized frequencies $a=\omega_c/\omega_1$ and $b=\omega_c/\omega_2$. At $s=j\omega_c$,

$$
\angle T(j\omega_c)=-90°-\arctan a+\arctan b=-135°
\quad\Longrightarrow\quad
\arctan a-\arctan b=45° .
$$

Taking the tangent of both sides, $\dfrac{a-b}{1+ab}=1$, so

$$
a=\frac{1+b}{1-b}\qquad(b<1).
$$

### Step 3 — Magnitude condition

Unity loop gain at $\omega_c$ requires

$$
|T(j\omega_c)|=\frac{K_v}{\omega_c}\sqrt{\frac{1+b^2}{1+a^2}}=1
\quad\Longrightarrow\quad
\left(\frac{K_v}{\omega_c}\right)^2(1+b^2)=1+a^2 .
$$

With the phase relation, $1+a^2=\dfrac{(1-b)^2+(1+b)^2}{(1-b)^2}=\dfrac{2(1+b^2)}{(1-b)^2}$, and $K_v/\omega_c=10$, so the factor $1+b^2$ cancels:

$$
100=\frac{2}{(1-b)^2}\quad\Longrightarrow\quad(1-b)^2=0.02,\quad
b=1-\sqrt{0.02}=0.8586,\quad a=\frac{1.8586}{0.1414}=13.14 .
$$

### Step 4 — Pole and zero frequencies

$$
\omega_2=\frac{\omega_c}{b}=\frac{100\ \mathrm{rad/s}}{0.8586}=116.5\ \mathrm{rad/s}\ (\text{zero}),\qquad
\omega_1=\frac{\omega_c}{a}=\frac{100\ \mathrm{rad/s}}{13.14}=7.61\ \mathrm{rad/s}\ (\text{pole}),
$$

a ratio $\omega_2/\omega_1=15.3$. Substituting back gives $|T(j100)|=1.000$ and $\angle T(j100)=-135.0°$, a 45° phase margin. The closed-loop characteristic equation $s^2/\omega_1+s(1+K_v/\omega_2)+K_v=0$ has roots $s=-36.5\pm j79.2$ rad/s ($\omega_n\approx87$ rad/s, $\zeta\approx0.42$).

For comparison, the common asymptotic design places the zero at $\omega_c$ ($\omega_2=100$ rad/s) and assumes $\omega_1\ll\omega_c$, giving $\omega_1=\omega_c^2/(\sqrt2K_v)=7.07$ rad/s; it yields only about $-131°$ at crossover, which is why the exact solution above moves the zero slightly higher.

### Step 5 — Passive R-C realization

Use the lag-lead network: $R_1$ in series from the phase-detector output to the VCO input node, and $R_2$ in series with $C$ from that node to ground. Its voltage transfer function is

$$
F(s)=\frac{R_2+1/(sC)}{R_1+R_2+1/(sC)}=\frac{1+sR_2C}{1+s(R_1+R_2)C},
\qquad \omega_2=\frac{1}{R_2C},\quad \omega_1=\frac{1}{(R_1+R_2)C},
$$

with unity gain at dc, assuming the VCO input draws no current. Choosing $C=1\ \mu$F:

$$
R_2=\frac{1}{(116.5\ \mathrm{rad/s})(1\ \mu\mathrm F)}=8.59\ \mathrm{k\Omega},\qquad
R_1+R_2=\frac{1}{(7.61\ \mathrm{rad/s})(1\ \mu\mathrm F)}=131.4\ \mathrm{k\Omega},\qquad
R_1=122.8\ \mathrm{k\Omega}.
$$

Any other $C$ works with the resistors scaled to keep $R_2C=8.59$ ms and $(R_1+R_2)C=131.4$ ms.
