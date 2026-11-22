# Detailed solution - grsim-09-16

The amplifier is a two-stage op amp: a $pnp$ differential pair with a current-mirror load converts the differential input to a current. That current drives the high-impedance node $X$ (base of $Q_5$), which is Miller-compensated by the 10-pF capacitor around the second stage ($Q_5$ follower and $Q_6$ common emitter). With a single dominant pole, the unity-gain frequency is the first-stage transconductance divided by the compensation capacitance. The slew rate is the maximum first-stage output current, $I_{EE}$, divided by the same capacitance. The step response of the follower then consists of a slewing ramp followed by a short linear settling. ngspice checks all three results.

### Step 1 — Bias and signal path

With the inputs at the same voltage, the 20-µA tail splits equally: $|I_{C1}|=|I_{C2}|=10\ \mu$A. $Q_3$–$Q_4$ mirror $Q_1$'s current into node $X$, so in balance $Q_2$'s 10 µA exactly cancels $Q_4$'s 10 µA. $Q_5$ (emitter follower, 50-kΩ load) drives $Q_6$, which carries the 300-µA source current.

Signal direction: raising the base of $Q_1$ reduces $|I_{C1}|$ and hence $Q_4$'s sink current, while $|I_{C2}|$ rises. The net current into $X$ is positive, $X$ rises, and $Q_6$ (common emitter) pulls the output down. The base of $Q_2$ is therefore the noninverting input with respect to $V_o$, and the base of $Q_1$ the inverting one. For the unity-gain follower, the output is connected to $Q_1$'s base and the signal is applied to $Q_2$'s base.

### Step 2 — (a) Unity-gain frequency

For a small differential input $v_{id}$ the pair produces $\pm g_{m1}v_{id}/2$ in each collector. The mirror reproduces $Q_1$'s change at $Q_4$, so the two halves add at $X$: the stage transconductance is

$$
G_{m1}=g_{m1}=\frac{|I_{C1}|}{V_T}=\frac{10\ \mu\mathrm{A}}{26\ \mathrm{mV}}=0.385\ \mathrm{mA/V}.
$$

The second stage has high gain, so the 10-pF capacitor from $X$ to the output is Miller-multiplied and $X$ becomes the dominant pole. Above that pole the current $G_{m1}v_{id}$ flows entirely through the capacitor, so $|v_o|=G_{m1}|v_{id}|/(\omega C)$, which reaches unity at

$$
\omega_u=\frac{g_{m1}}{C}=\frac{0.385\ \mathrm{mA/V}}{10\ \mathrm{pF}}=3.85\times10^{7}\ \mathrm{rad/s},\qquad f_u=6.1\ \mathrm{MHz}.
$$

### Step 3 — (a) Slew rate

For a large input, one side of the pair takes the whole tail current, and the first stage delivers at most $\pm I_{EE}$ to node $X$. Because $X$ is a virtual ground for the Miller capacitor (its voltage barely moves), this current charges $C$ and sets the rate of change of the output:

$$
SR=\frac{I_{EE}}{C}=\frac{20\ \mu\mathrm{A}}{10\ \mathrm{pF}}=2\ \mathrm{V/\mu s},
$$

the same in both directions because the mirror and the pair are symmetric.

### Step 4 — (b) Step response of the follower

A 10-V input step makes the initial error 10 V, far beyond the roughly $2V_T$ needed to switch the pair fully. The output therefore slews at 2 V/µs from −5 V. The stage leaves slewing when the error falls to about

$$
\frac{SR}{\omega_u}=\frac{2\ \mathrm{V/\mu s}}{3.85\times10^{7}\ \mathrm{rad/s}}=52\ \mathrm{mV}
$$

This happens at $t\approx(10\ \mathrm{V}-0.052\ \mathrm{V})/(2\ \mathrm{V/\mu s})=4.97\ \mu$s. After that, the closed-loop follower is linear with a single pole at $\omega_u$, so the remaining error decays as $e^{-t/\tau}$ with $\tau=1/\omega_u=26$ ns. The output reaches +5 V a little after 5 µs and stays there until 20 µs.

![Follower output versus time from 0 to 20 µs: a linear ramp from −5 V to +5 V lasting about 5 µs, then flat at +5 V; simulated and hand curves overlap](/q/grsim-09-16/solution-step.svg)

### Step 5 — (c) SPICE simulation

All transistors use $\beta=100$, $V_A=130$ V and $I_S=10^{-15}$ A (no junction or diffusion capacitances), so the 10-pF capacitor is the only capacitance. The temperature is set for $V_T=26$ mV.

```spice
* grsim-09-16 two-stage op amp
.options temp=28.57 tnom=28.57
.model qn npn is=1e-15 bf=100 vaf=130
.model qp pnp is=1e-15 bf=100 vaf=130
VCC vcc 0 15
VEE vee 0 -15
IEE vcc e 20u
Q1 c1 b1 e qp
Q2 x b2 e qp
Q3 c1 c1 vee qn
Q4 x c1 vee qn
Q5 vcc x e5 qn
R5 e5 vee 50k
Q6 o e5 vee qn
I6 vcc o 300u
CC x o 10p
* follower: output to Q1 base, step on Q2 base
Vfb b1 o 0
Vin b2 0 pulse(-5 5 0 1n 1n 100u 200u)
.tran 2n 20u 0 2n
.end
```

For the open-loop response, the output is returned to $Q_1$'s base through a 1-GH inductor (which fixes the dc point), and the ac drive is applied to $Q_1$'s base through a 1-F capacitor. A separate run with a falling step checks the negative slew rate.

| Quantity | Hand | ngspice |
|---|---|---|
| $\lvert I_{C1}\rvert$, $\lvert I_{C2}\rvert$ | 10 µA | 9.92 µA, 9.91 µA |
| $g_{m1}$ | 0.385 mA/V | 0.381 mA/V |
| Open-loop dc gain | order $10^6$ | $1.78\times10^{6}$ (125 dB) |
| Dominant pole | $f_u/a_0$ | 3.38 Hz |
| Unity-gain frequency | 6.1 MHz | 6.02 MHz, phase −92° |
| Slew rate, rising / falling | 2 V/µs | 1.97 / 1.97 V/µs |
| Output within 10 mV of +5 V | ≈ 5.1 µs | 5.11 µs |

The response rolls off at −20 dB/decade from 3.4 Hz to beyond 6 MHz, with a phase near −90° at the unity-gain frequency. The extra 2° comes from the right-half-plane zero $g_{m6}/C\approx184$ MHz created by the feedforward path through the capacitor. The step response is the predicted ramp of about 2 V/µs, 10–90 % in 4.07 µs, followed by settling within about 0.1 µs. The slightly lower simulated slew rate and $f_u$ come from base currents, which take a little of the 20-µA tail current.
