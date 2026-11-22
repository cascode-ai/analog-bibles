# Detailed solution - grsim-10-12

The circuit uses the same complementary level-shift idea as a class-AB transconductor, but it adds the two branch currents instead of subtracting them. Each input drives a source-follower level shifter ($M_1$–$M_5$ and $M_4$–$M_8$, biased by $I_1$). Each shifted gate voltage drives one of two cross-coupled NMOS–PMOS series branches, $M_3$–$M_6$ and $M_2$–$M_7$. The branch currents are summed in $M_9$, mirrored by $M_{10}$ to the output, and $M_1$ and $M_4$ take back $2I_1$ there. With square-law devices, the linear terms of the two branch currents cancel in the sum, leaving a pure $V_i^2$ term. Derive this law and its range, then verify the dc characteristic and the response to a sine wave in ngspice.

### Step 1 — Device constants

$\beta=\mu C_{ox}(W/L)$ is the same for both types:

$$
\beta_n=(60\ \mu\mathrm{A/V^2})(20)=1200\ \mu\mathrm{A/V^2}=\beta_p=(20\ \mu\mathrm{A/V^2})(60).
$$

A device carrying $I$ has overdrive $\sqrt{2I/\beta}$. The level shifters carry $I_1=50\ \mu$A, so

$$
V_{GS1}+|V_{GS5}|=2V_t+2\sqrt{\frac{2I_1}{\beta}}=1.4\ \mathrm{V}+2(0.2887\ \mathrm{V})=1.977\ \mathrm{V},
$$

and the same holds for $M_4$–$M_8$.

### Step 2 — Branch currents

Let $V_i=V_+-V_-$.

- **Branch $M_3$–$M_6$** (current $I_A$). $M_3$'s gate is at $V_-$, and $M_6$'s gate is tied to $M_5$'s, at $V_+-(V_{GS1}+|V_{GS5}|)$. The total gate drive of the series pair is therefore
$$
V_{GS3}+|V_{GS6}|=V_--V_++V_{GS1}+|V_{GS5}|\ \Rightarrow\ 2\sqrt{\frac{2I_A}{\beta}}=2\sqrt{\frac{2I_1}{\beta}}-V_i .
$$
- **Branch $M_2$–$M_7$** (current $I_B$). By symmetry, $M_2$'s gate is at $V_+$ and $M_7$'s gate follows $V_-$:
$$
2\sqrt{\frac{2I_B}{\beta}}=2\sqrt{\frac{2I_1}{\beta}}+V_i .
$$

Squaring each:

$$
I_{A,B}=\left(\sqrt{I_1}\mp V_i\sqrt{\frac{\beta}{8}}\right)^2=I_1\mp V_i\sqrt{\frac{\beta I_1}{2}}+\frac{\beta}{8}V_i^2 .
$$

### Step 3 — Output current

$M_9$ carries $I_A+I_B$, and $M_{10}$ mirrors it into the output node, where $M_1$ and $M_4$ each sink $I_1$. Hence

$$
I_o=I_A+I_B-2I_1=\frac{\beta}{4}V_i^2=(300\ \mu\mathrm{A/V^2})\,V_i^2 .
$$

The linear terms cancel exactly, and the result does not depend on $I_1$ or $V_t$: the circuit is an exact squarer for square-law devices.

### Step 4 — Range of validity

The law requires both branches to conduct, $I_A\ge0$ and $I_B\ge0$:

$$
|V_i|\le2\sqrt{\frac{2I_1}{\beta}}=\sqrt{\frac{8I_1}{\beta}}=\sqrt{\frac{8(50\ \mu\mathrm{A})}{1200\ \mu\mathrm{A/V^2}}}=0.577\ \mathrm{V},
$$

where $I_o=2I_1=100\ \mu$A. Beyond this, one branch is off and

$$
I_o=\frac{\beta}{8}\left(|V_i|+0.577\ \mathrm{V}\right)^2-2I_1=(150\ \mu\mathrm{A/V^2})(|V_i|+0.577\ \mathrm{V})^2-100\ \mu\mathrm{A},
$$

which grows more slowly than the square law (273 µA instead of 300 µA at $|V_i|=1$ V).

**Saturation check** with the suggested bias ($V_-=3$ V, output at 3.5 V). $M_1$ and $M_4$ have their gates at most 3.577 V and their drains at 3.5 V, so $V_{GD}<V_t$. The drains of $M_2$ and $M_3$ sit at $M_9$'s gate, about 4 V, above their gates. The PMOS devices $M_6$, $M_7$ have their sources near 2 V and their drains at ground. All devices therefore stay saturated over the range.

### Step 5 — SPICE verification

```spice
* grsim-10-12 CMOS squarer
.options reltol=1e-7 abstol=1e-15 vntol=1e-9
.model nm nmos level=1 kp=60u vto=0.7 gamma=0 lambda=0
.model pm pmos level=1 kp=20u vto=-0.7 gamma=0 lambda=0
VDD vdd 0 5
Vm inm 0 3
Vi inp inm dc 0 sin(0 0.5 1k)
Vo out 0 3.5
M9 g9 g9 vdd vdd pm w=60u l=1u
M10 out g9 vdd vdd pm w=60u l=1u
M1 out inp s1 0 nm w=20u l=1u
M5 g5 g5 s1 vdd pm w=60u l=1u
I1a g5 0 50u
M4 out inm s4 0 nm w=20u l=1u
M8 g8 g8 s4 vdd pm w=60u l=1u
I1b g8 0 50u
M2 g9 inp s2 0 nm w=20u l=1u
M7 0 g8 s2 vdd pm w=60u l=1u
M3 g9 inm s3 0 nm w=20u l=1u
M6 0 g5 s3 vdd pm w=60u l=1u
.dc Vi -1 1 1m
.tran 1u 10m 0 1u
.four 1k i(Vo)
.end
```

$I_o$ is the current flowing from the output node into `Vo`.

| $V_i$ | ±0.289 V | ±0.5 V | ±0.577 V | ±0.7 V | ±1 V |
|---|---|---|---|---|---|
| $300\ \mu\mathrm{A/V^2}\cdot V_i^2$ or the Step-4 law | 25.06 µA | 75.00 µA | 99.88 µA | 144.74 µA | 273.21 µA |
| ngspice | 25.06 µA | 75.00 µA | 99.88 µA | 144.74 µA | 273.21 µA |

![Output current versus input voltage from −1 V to 1 V: an exact parabola 300 µA/V²·Vi² up to 100 µA at ±0.577 V, then growing more slowly, 273 µA at ±1 V instead of 300 µA](/q/grsim-10-12/solution-transfer.svg)

Inside $|V_i|\le0.577$ V the simulated characteristic matches $300\ \mu\mathrm{A/V^2}\cdot V_i^2$ to within $10^{-5}$ µA, and it is symmetric in $V_i$. Outside, it follows the single-branch law of Step 4.

### Step 6 — Sine-wave drive

For $V_i=V_a\sin\omega t$ inside the square-law range,

$$
I_o=\frac{\beta}{4}V_a^2\sin^2\omega t=\frac{\beta}{8}V_a^2\left(1-\cos2\omega t\right).
$$

With $V_a=0.5$ V, $\beta V_a^2/8=(150\ \mu\mathrm{A/V^2})(0.25\ \mathrm{V^2})=37.5\ \mu$A. The Fourier analysis of the simulated $I_o$ gives:

| Component | ngspice |
|---|---|
| DC | 37.50 µA |
| Fundamental (1 kHz) | $1.4\times10^{-18}$ A (zero) |
| Second harmonic (2 kHz) | 37.50 µA, phase −90° (a cosine term) |
| Third and fourth harmonics | below $10^{-14}$ A |

![Input and output waveforms for a 0.5-V, 1-kHz sine input: Io is a raised cosine between 0 and 75 µA at 2 kHz, twice the input frequency](/q/grsim-10-12/solution-waveform.svg)

The output contains only a dc term and the second harmonic, of equal amplitude $\beta V_a^2/8$, and no fundamental. The circuit is therefore a squarer and a frequency doubler. A fundamental would appear only through device mismatch or a dc offset $V_0$ added to $V_i$ (amplitude $(\beta/2)V_0V_a$). Driving beyond ±0.577 V would break the square law at the peaks and add fourth and higher even harmonics.
