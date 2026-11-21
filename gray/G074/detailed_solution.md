# Detailed solution - G074

The three specifications fix the design one quantity at a time: $R_{id}$ fixes $r_\pi$ and hence the bias current, the gain then fixes $R_C$, and the CMRR fixes $R_{\text{TAIL}}$. The supplies follow from the dc voltage drops across $R_C$ and $R_{\text{TAIL}}$.

### Step 1 — Bias current from the input resistance

With no emitter degeneration, a differential input puts $v_{id}/2$ across each $r_\pi$, so $R_{id}=v_{id}/i_b=2r_\pi$:

$$
r_\pi=\frac{2\ \mathrm{M\Omega}}2=1\ \mathrm{M\Omega},\qquad
g_m=\frac{\beta_0}{r_\pi}=\frac{200}{1\ \mathrm{M\Omega}}=0.2\ \mathrm{mA/V},\qquad
I_C=g_mV_T=(0.2\ \mathrm{mA/V})(26\ \mathrm{mV})=5.2\ \mu\mathrm A .
$$

### Step 2 — Collector resistor from the gain

In the differential half circuit the tail node is at ac ground, so $v_{od}/v_{id}=-g_mR_C$:

$$
R_C=\frac{500}{g_m}=\frac{500}{0.2\ \mathrm{mA/V}}=2.5\ \mathrm{M\Omega}.
$$

### Step 3 — Tail resistor from the CMRR

In the common-mode half circuit each emitter sees $2R_{\text{TAIL}}$, so $A_{cm}=-g_mR_C/[1+2g_mR_{\text{TAIL}}(1+1/\beta_0)]$, and

$$
\mathrm{CMRR}=\left|\frac{A_{dm}}{A_{cm}}\right|=1+2g_mR_{\text{TAIL}}\left(1+\frac1{\beta_0}\right)=500 .
$$

Neglecting the small $1/\beta_0$ term,

$$
R_{\text{TAIL}}=\frac{499}{2(0.2\ \mathrm{mA/V})}=1.25\ \mathrm{M\Omega}
$$

(1.24 MΩ if the factor $1+1/\beta_0$ is kept).

### Step 4 — Minimum $V_{CC}$

The bases are at the 0-V common-mode input. Each collector sits at $V_{CC}-I_CR_C$, and the dc drop is

$$
I_CR_C=(5.2\ \mu\mathrm A)(2.5\ \mathrm{M\Omega})=13\ \mathrm V .
$$

The forward-active region requires the collector-base junction not to be forward biased, $V_{CB}\ge0$, so

$$
V_{CC}-13\ \mathrm V\ge0\quad\Rightarrow\quad V_{CC,\min}=13\ \mathrm V .
$$

(Requiring a margin such as $V_{CE}\ge0.2$ V instead would lower this slightly, to about 12.5 V.)

### Step 5 — Minimum $V_{EE}$

With $I_{\text{TAIL}}=0$, the tail resistor alone supplies both emitter currents. The tail node is at $-V_{BE(\text{on})}=-0.7$ V and

$$
2I_E=\frac{2I_C}{\alpha_0}=2(5.2\ \mu\mathrm A)\frac{201}{200}=10.45\ \mu\mathrm A,
$$

$$
V_{EE}=V_{BE(\text{on})}+2I_ER_{\text{TAIL}}=0.7\ \mathrm V+(10.45\ \mu\mathrm A)(1.25\ \mathrm{M\Omega})=13.7\ \mathrm V .
$$

Because the specifications fix the tail current, this value is required exactly: a different $V_{EE}$ would change $I_C$, and with it $r_\pi$, the gain and the CMRR. The design is $I_C=5.2\ \mu$A, $R_C=2.5\ \mathrm{M\Omega}$, $R_{\text{TAIL}}=1.25\ \mathrm{M\Omega}$, $V_{CC,\min}=13$ V and $V_{EE,\min}\approx13.7$ V.
