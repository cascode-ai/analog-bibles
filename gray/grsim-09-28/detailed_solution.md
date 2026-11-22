# Detailed solution - grsim-09-28

The input stage is a class-AB transconductor. The source followers $M_1$–$M_5$ and $M_4$–$M_8$ (each biased by $I_1$) shift the two input voltages. Each shifted voltage drives the gate of a complementary series pair, $M_3$–$M_6$ or $M_2$–$M_7$, whose currents $i_{d3}$ and $i_{d7}$ are mirrored by cascode mirrors to the output, where they are subtracted. Because each series pair turns on harder as the input grows, the output current is not limited to the bias current. First find the bias and the small-signal transconductance, gain and bandwidth. Then derive the large-signal $I_o(V_i)$ from the square law, compute the follower's step response, and compare with ngspice.

### Step 1 — (a) Bias currents

Going from the gate of $M_3$ to the gate of $M_6$ and back through the level shifter gives the loop

$$
V_{\text{in}+}-V_{GS3}-V_{SG6}=V_{\text{in}-}-V_{GS1}-V_{SG5}\ \Rightarrow\ V_{GS3}+V_{SG6}=V_i+V_{GS1}+V_{SG5},\qquad V_i=V_{\text{in}+}-V_{\text{in}-}.
$$

$M_3$ matches $M_1$ (NMOS 20/1) and $M_6$ matches $M_5$ (PMOS 60/1). At $V_i=0$ the series pair therefore has the same total gate drive as the level shifter and carries the same current: $I_{D3}=I_{D6}=I_1=20\ \mu$A. Likewise $I_{D2}=I_{D7}=20\ \mu$A. The cascode mirrors (1:1, all PMOS 300/1 and all NMOS 60/1) copy these currents to $M_{13}$–$M_{14}$ and $M_{15}$–$M_{16}$, so 20 µA flows in each output branch and $I_o=0$.

### Step 2 — (a) Small-signal gain and bandwidth

With $\beta_n=\mu_nC_{ox}(W/L)_{1\text{–}4}=(60\ \mu\mathrm{A/V^2})(20)=1.2\ \mathrm{mA/V^2}$ and $\beta_p=\mu_pC_{ox}(W/L)_{5\text{–}8}=(20\ \mu\mathrm{A/V^2})(60)=1.2\ \mathrm{mA/V^2}$:

$$
g_{m3}=g_{m6}=\sqrt{2\beta I_D}=\sqrt{2(1.2\ \mathrm{mA/V^2})(20\ \mu\mathrm{A})}=0.219\ \mathrm{mA/V}.
$$

A change $v_i$ appears across the series pair $M_3$–$M_6$ (the shifted gate of $M_6$ is fixed), which acts like one device of transconductance $g_{m3}g_{m6}/(g_{m3}+g_{m6})$. The opposite change appears across $M_2$–$M_7$. The output current is the difference of the two mirrored currents:

$$
G_m=\frac{i_o}{v_i}=\frac{2g_{m3}g_{m6}}{g_{m3}+g_{m6}}=g_{m3}=0.219\ \mathrm{mA/V}.
$$

The output resistance is that of the two cascodes in parallel, with $r_o=1/(\lambda I_D)=1/[(0.05\ \mathrm{V^{-1}})(20\ \mu\mathrm{A})]=1\ \mathrm{M\Omega}$, $g_{m14}=\sqrt{2(6\ \mathrm{mA/V^2})(20\ \mu\mathrm{A})}=0.49$ mA/V and $g_{m15}=\sqrt{2(3.6\ \mathrm{mA/V^2})(20\ \mu\mathrm{A})}=0.38$ mA/V:

$$
R_o=(g_{m14}r_{o14}r_{o13})\parallel(g_{m15}r_{o15}r_{o16})=490\ \mathrm{M\Omega}\parallel380\ \mathrm{M\Omega}=214\ \mathrm{M\Omega},
$$

$$
a_0=G_mR_o=(0.219\ \mathrm{mA/V})(214\ \mathrm{M\Omega})=4.7\times10^{4}\ (93\ \mathrm{dB}),\qquad \omega_u=\frac{G_m}{C_L}=\frac{0.219\ \mathrm{mA/V}}{10\ \mathrm{pF}}=2.19\times10^{7}\ \mathrm{rad/s}\ (3.5\ \mathrm{MHz}).
$$

The only high-impedance node is the output, so $C_L$ sets the dominant pole and also provides the compensation.

### Step 3 — (a) Large-signal transfer characteristic

An NMOS and a PMOS in series, carrying the same current $I$, need a total gate drive $(V_{GS}-V_t)+(V_{SG}-|V_t|)=\sqrt{2I/\beta_n}+\sqrt{2I/\beta_p}=\sqrt{2I/\beta_s}$, where

$$
\frac{1}{\sqrt{\beta_s}}=\frac{1}{\sqrt{\beta_n}}+\frac{1}{\sqrt{\beta_p}}\ \Rightarrow\ \beta_s=\frac{1.2\ \mathrm{mA/V^2}}{4}=0.3\ \mathrm{mA/V^2}.
$$

The level shifter carries $I_1$, so its overdrive sum is $V_0=\sqrt{2I_1/\beta_s}=\sqrt{2(20\ \mu\mathrm{A})/(0.3\ \mathrm{mA/V^2})}=0.365$ V. The loop of Step 1 (and its mirror image for $M_2$–$M_7$) then gives

$$
I_{D3}=\frac{\beta_s}{2}(V_0+V_i)^2,\qquad I_{D7}=\frac{\beta_s}{2}(V_0-V_i)^2 .
$$

- **All four devices on** ($|V_i|<V_0$):
$$
I_o=I_{D3}-I_{D7}=2\beta_sV_0V_i=2\sqrt{2\beta_sI_1}\,V_i=(0.219\ \mathrm{mA/V})\,V_i,
$$
which is exactly linear, because the quadratic terms cancel.
- **$V_i>V_0$:** $M_2$ and $M_7$ are cut off ($I_{D7}=0$), and
$$
I_o=\frac{\beta_s}{2}(V_i+V_0)^2=(0.15\ \mathrm{mA/V^2})(V_i+0.365\ \mathrm{V})^2 ,
$$
with the mirror-image law $I_o=-(\beta_s/2)(V_0-V_i)^2$ for $V_i<-V_0$ ($M_3$, $M_6$ off).

The transition is at $|V_i|=V_0=\sqrt{2I_1/\beta_s}=0.365$ V, where $|I_o|=2\beta_sV_0^2=4I_1=80\ \mu$A. Beyond it the current keeps growing quadratically. There is no slew-rate limit set by the bias current.

### Step 4 — (b) Step response, linear model

In unity-gain feedback ($V_o$ tied to in−), the loop has the single pole $G_m/C_L$, so the output approaches the input exponentially with

$$
\tau=\frac{C_L}{G_m}=\frac{10\ \mathrm{pF}}{0.219\ \mathrm{mA/V}}=45.6\ \mathrm{ns},\qquad V_o(t)=-1.5\ \mathrm{V}+3\ \mathrm{V}\left(1-e^{-t/\tau}\right).
$$

It crosses 0 V at $\tau\ln2=31.6$ ns, reaches 63 % at 45.6 ns and is within 1 % (30 mV) at $\tau\ln100=210$ ns. The initial load current in this model is $G_m\times3\ \mathrm{V}=0.66$ mA.

The actual initial differential input is 3 V, far beyond $V_0$, so the large-signal law applies: $I_o(0^+)=(0.15\ \mathrm{mA/V^2})(3.365\ \mathrm{V})^2=1.70$ mA, about 2.6 times the linear value. The real output therefore starts much faster than the exponential and slows down as the error falls below $V_0$.

### Step 5 — SPICE comparison

The deck uses level-1 models ($\gamma=0$, $|\lambda|=0.05\ \mathrm{V^{-1}}$, the given $\mu C_{ox}$ and $V_t$) with the stated widths and $L=1\ \mu$m.

```spice
* grsim-09-28 class-AB CMOS op amp
.model nm nmos level=1 kp=60u vto=0.7 lambda=0.05 gamma=0
.model pm pmos level=1 kp=20u vto=-0.7 lambda=0.05 gamma=0
VDD vdd 0 5
VSS vss 0 -5
M1 vdd inm a a nm w=20u l=1u
M5 b b a a pm w=60u l=1u
I1a b vss 20u
M4 vdd inp c c nm w=20u l=1u
M8 dd dd c c pm w=60u l=1u
I1b dd vss 20u
M2 vdd inm x2 x2 nm w=20u l=1u
M7 d7 dd x2 x2 pm w=60u l=1u
M3 d3 inp x3 x3 nm w=20u l=1u
M6 vss b x3 x3 pm w=60u l=1u
M10 d3 d3 g9 vdd pm w=300u l=1u
M9 g9 g9 vdd vdd pm w=300u l=1u
M14 o d3 s13 vdd pm w=300u l=1u
M13 s13 g9 vdd vdd pm w=300u l=1u
M11 d7 d7 g12 vss nm w=60u l=1u
M12 g12 g12 vss vss nm w=60u l=1u
M15 o d7 s16 vss nm w=60u l=1u
M16 s16 g12 vss vss nm w=60u l=1u
CL o 0 10p
Vfb inm o 0
Vp inp 0 pulse(-1.5 1.5 0 0.1n 0.1n 2u 4u)
.tran 0.1n 400n 0 0.1n
.end
```

For the open-loop response the output is returned to in− through a 1-GH inductor. For $I_o(V_i)$ the output is held at 0 V by a voltage source whose current is $I_o$, with in− grounded and in+ swept.

| Quantity | Hand ($\lambda$ ignored in the currents) | ngspice |
|---|---|---|
| $I_{D2}$, $I_{D3}$, $I_{D14}$, $I_{D15}$ | 20 µA | 20.86 µA |
| $G_m$ | 0.219 mA/V | 0.246 mA/V |
| Open-loop gain | $4.7\times10^{4}$ (93 dB) | $6.8\times10^{4}$ (96.7 dB) |
| Unity-gain frequency | 3.5 MHz | 3.90 MHz, phase −90° |
| $I_o$–$V_i$ break | ±0.365 V (80 µA) | ±0.37 V (90 µA) |
| $I_o$ at $V_i=1.5$ V | 0.52 mA | 0.61 mA |
| Peak $C_L$ current | 1.70 mA (linear model 0.66 mA) | 1.96 mA at $t=0^+$ |
| $V_o$ at 20 ns | −0.43 V (linear model) | +0.31 V |
| Within 1 % of +1.5 V | 210 ns (linear model) | 163 ns |

![Output short-circuit current versus differential input from −1.5 V to 1.5 V: a straight line through the origin between ±0.365 V and square-law growth beyond, simulated slightly above the hand curve](/q/grsim-09-28/solution-io.svg)

![Follower output for a −1.5 V to +1.5 V step: the simulated output rises much faster initially than the 45.6-ns linear exponential, and the load current peaks near 1.95 mA at the step and decays as the output settles](/q/grsim-09-28/solution-step.svg)

The simulation confirms the class-AB behaviour. The $I_o$–$V_i$ curve is a straight line out to about ±0.37 V and grows as a square law beyond, and the follower's output current peaks at about 2 mA. That is 100 times the 20-µA bias, so there is no slew-limited ramp at $2I_1/C_L=4$ V/µs. Instead the response is fastest at the start and becomes the linear exponential once the error falls below about 0.37 V; it settles to 1 % in 163 ns.

The simulated $G_m$, gain and peak current are 10–20 % above the hand values. The level-1 model multiplies each drain current by $1+\lambda V_{DS}$, and $M_2$, $M_3$, $M_6$, $M_7$ operate at several volts of $V_{DS}$. This raises the bias currents slightly and lowers the overdrive needed for a given current, so $g_m=2I_D/V_{ov}$ rises by about 12 %. The output-cascode resistances also use $r_o=(1+\lambda V_{DS})/(\lambda I_D)$, which is higher than $1/(\lambda I_D)$.
