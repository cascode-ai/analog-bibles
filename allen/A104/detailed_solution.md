# Detailed solution - A104

The amplifier forces equal voltages at its inputs, so the difference between two stacks of emitter–base voltages appears across $R_1$; with equal currents this difference is PTAT. M5 copies the current into $R_2$, where it is scaled by $R_2/R_1$ and added to $V_{EB3}$. Setting the temperature derivative of $V_{REF}$ to zero at $T_0$ with the given $V_{EB}(T)$ model fixes $R_2/R_1$, and the bias current then fixes $R_1$.

### Step 1 — Branch currents and the two stacks

M1–M5 are identical with a common gate line and common source at $V_{DD}$, so they deliver equal drain currents $I$ (base currents neglected). Reading the figure:

- Left stack (amplifier "+" input): M1 biases Q2a, whose base is grounded; Q2a's emitter drives the base of Q2b, which M2 biases. The "+" input is at $V_{EB2a}+V_{EB2b}$.
- Right stack ("−" input): M3 biases Q1a (base grounded), whose emitter drives the base of Q1b, biased by M4 through $R_1$. The "−" input is at $V_{EB1a}+V_{EB1b}+IR_1$.
- Output branch: M5 drives $R_2$ in series with Q3 (base and collector grounded), and $V_{REF}$ is taken across this series combination.

Every transistor carries the same current $I$; Q1a and Q1b have 10 times the emitter area of Q2a, Q2b and Q3.

### Step 2 — PTAT voltage across $R_1$

With the ideal amplifier equalizing its inputs,

$$
V_{R1}=IR_1=(V_{EB2a}-V_{EB1a})+(V_{EB2b}-V_{EB1b}).
$$

For a forward-active bipolar transistor $V_{EB}=V_t\ln[I/(AJ_s)]$, where $A$ is the emitter area. At equal current each difference is $V_t\ln10$, so

$$
V_{R1}=2V_t\ln10=2(0.026\ \mathrm V)(2.3026)=0.1197\ \mathrm V,
\qquad
R_1=\frac{2V_t\ln10}{I}=\frac{0.1197\ \mathrm V}{I}.
$$

$V_{R1}$ is proportional to $T$, so $I=V_{R1}/R_1$ is PTAT (for a temperature-independent $R_1$), which is the bias assumed by the $V_{EB}(T)$ model. The 10× devices must be in the $R_1$ branch: they have the smaller $V_{EB}$, which makes $V_{R1}$ positive.

### Step 3 — Output voltage

M5 copies $I$ into $R_2$ and Q3:

$$
V_{REF}=V_{EB3}+IR_2=V_{EB3}+\frac{R_2}{R_1}\,2V_t\ln10 .
$$

### Step 4 — Zero temperature coefficient at $T_0$

Differentiate the given model at $T=T_0$; the derivative of $T\ln(T/T_0)$ is 1 there:

$$
\left.\frac{dV_{EB3}}{dT}\right|_{T_0}=-\frac{V_{G0}-V_{EB3}+(\gamma-\alpha)V_{t0}}{T_0},
\qquad
\frac{d}{dT}\left(\frac{R_2}{R_1}2V_t\ln10\right)=\frac{R_2}{R_1}\frac{2V_{t0}\ln10}{T_0},
$$

with $V_{EB3}$ evaluated at $T_0$ and $V_{t0}=0.026$ V. Setting the sum to zero:

$$
\frac{R_2}{R_1}\,2V_{t0}\ln10=V_{G0}+(\gamma-\alpha)V_{t0}-V_{EB3}
\quad\Rightarrow\quad
\frac{R_2}{R_1}=\frac{V_{G0}+(\gamma-\alpha)V_{t0}-V_{EB3}}{2V_{t0}\ln10}.
$$

Substituting back into Step 3 gives the output at zero TC, independent of $V_{EB3}$:

$$
V_{REF}=V_{G0}+(\gamma-\alpha)V_{t0}=1.205\ \mathrm V+2.2(0.026\ \mathrm V)=1.262\ \mathrm V ,
$$

which is the required value. So the zero-TC condition alone delivers 1.262 V, and $R_2/R_1=(1.262\ \mathrm V-V_{EB3})/(2V_t\ln10)$.

### Step 5 — Numerical design

For $V_{EB3}=0.6$ V and $I=10$ µA:

$$
\frac{R_2}{R_1}=\frac{1.262-0.6\ \mathrm V}{0.1197\ \mathrm V}=5.53,\qquad
R_1=\frac{0.1197\ \mathrm V}{10\ \mu\mathrm A}=12.0\ \mathrm{k\Omega},\qquad
R_2=5.53R_1=66.2\ \mathrm{k\Omega}.
$$

M1–M5 only need equal $W/L$ and saturation; the amplifier sets their gate voltage.

### Step 6 — Advantage of stacking the bipolar transistors

An input offset $V_{OS}$ of the amplifier adds directly to $V_{R1}$, so the current and $V_{REF}$ change by $\Delta V_{REF}=(R_2/R_1)V_{OS}$; the amplifier's input noise is amplified the same way. With two junctions per side, $V_{R1}=2V_t\ln10$ is twice as large as for a single pair, so the required $R_2/R_1$ is half as large (5.53 instead of about 11 for $V_{EB3}=0.6$ V). The output error due to offset and noise is therefore halved.

Equivalently, two 10:1 pairs produce the same PTAT voltage as one pair with a 100:1 area ratio, $2V_t\ln10=V_t\ln100$, at a much smaller total area. The cost is headroom: each stack needs about $2V_{EB}+V_{R1}\approx1.4$ V below the PMOS drains.
