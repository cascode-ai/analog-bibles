# Detailed solution - grsim-09-18

In a single-pole two-stage op amp, the unity-gain frequency is $\omega_u=G_{m1}/C$ and the slew rate is $SR=I_{EE}/C$, so $SR=\omega_u\,(I_{EE}/G_{m1})$. Emitter degeneration lowers $G_{m1}$ without changing $I_{EE}$; keeping $\omega_u$ fixed then requires a proportionally smaller $C$, and the slew rate rises by the same factor. Compute the degenerated transconductance, the new capacitor and the new slew rate, and check $f_u$ and the slew rate with ngspice.

### Step 1 — Original design

Each input transistor carries $I_{EE}/2=10\ \mu$A, so $g_{m1}=10\ \mu\mathrm{A}/26\ \mathrm{mV}=0.385$ mA/V. With the mirror load the first-stage transconductance is $G_{m1}=g_{m1}$, so

$$
\omega_u=\frac{g_{m1}}{C}=\frac{0.385\ \mathrm{mA/V}}{10\ \mathrm{pF}}=3.85\times10^{7}\ \mathrm{rad/s}\ (6.1\ \mathrm{MHz}),\qquad SR=\frac{I_{EE}}{C}=\frac{20\ \mu\mathrm{A}}{10\ \mathrm{pF}}=2\ \mathrm{V/\mu s}.
$$

### Step 2 — Transconductance with 10-kΩ emitter resistors

A resistor $R_E$ in each emitter adds to the intrinsic emitter resistance $1/g_{m1}$ (base currents neglected). For a differential signal the common emitter node is an ac ground, so each half carries $i_c=(v_{id}/2)/(1/g_{m1}+R_E)$:

$$
G_{m1}'=\frac{g_{m1}}{1+g_{m1}R_E}=\frac{0.385\ \mathrm{mA/V}}{1+(0.385\ \mathrm{mA/V})(10\ \mathrm{k\Omega})}=\frac{0.385\ \mathrm{mA/V}}{4.85}=0.0794\ \mathrm{mA/V}.
$$

### Step 3 — New capacitor and slew rate

For the same $\omega_u$, the capacitor must scale with the transconductance:

$$
C'=\frac{G_{m1}'}{\omega_u}=\frac{C}{1+g_{m1}R_E}=\frac{10\ \mathrm{pF}}{4.85}=2.06\ \mathrm{pF}.
$$

The maximum current available to charge the capacitor is still the whole tail current, because a large input switches it entirely to one side regardless of $R_E$:

$$
SR'=\frac{I_{EE}}{C'}=\frac{20\ \mu\mathrm{A}}{2.06\ \mathrm{pF}}=9.7\ \mathrm{V/\mu s},
$$

an improvement by the factor $1+g_{m1}R_E=4.85$. The input stage also has a wider linear range: the pair now needs about $\pm(I_{EE}R_E+4V_T)\approx\pm0.3$ V to switch fully, instead of about $\pm4V_T$, because the whole tail current must develop $I_{EE}R_E=0.2$ V across one emitter resistor. Equivalently, $SR/\omega_u=I_{EE}/G'_{m1}$ grows from 52 mV to 0.25 V.

### Step 4 — SPICE check

The deck is that of the original amplifier with 10-kΩ resistors added in the emitters of $Q_1$ and $Q_2$ and $C=2.06$ pF. The output is returned to $Q_1$'s base (the inverting input with respect to $V_o$) for the follower, with a −5 V to +5 V step on $Q_2$'s base. The open-loop response uses the same 1-GH/1-F arrangement as before.

```spice
* grsim-09-18 op amp with emitter degeneration
.options temp=28.57 tnom=28.57
.param CC=2.0619p
.model qn npn is=1e-15 bf=100 vaf=130
.model qp pnp is=1e-15 bf=100 vaf=130
VCC vcc 0 15
VEE vee 0 -15
IEE vcc e 20u
RE1 e e1 10k
RE2 e e2 10k
Q1 c1 b1 e1 qp
Q2 x b2 e2 qp
Q3 c1 c1 vee qn
Q4 x c1 vee qn
Q5 vcc x e5 qn
R5 e5 vee 50k
Q6 o e5 vee qn
I6 vcc o 300u
CC x o {CC}
Vfb b1 o 0
Vin b2 0 pulse(-5 5 0 1n 1n 100u 200u)
.tran 2n 20u 0 2n
.end
```

| Configuration | $f_u$ (ngspice) | Slew rate rise / fall (ngspice) |
|---|---|---|
| Original ($R_E=0$, $C=10$ pF) | 6.02 MHz | 1.97 / 1.97 V/µs |
| $R_E=10$ kΩ, $C=10$ pF | 1.24 MHz | 1.97 / 1.97 V/µs |
| $R_E=10$ kΩ, $C=2.06$ pF | 6.02 MHz | 9.54 / 9.54 V/µs |

![Follower output versus time for the original design (dashed, about 5 µs ramp) and the degenerated design with 2.06 pF (solid, about 1 µs ramp) for a −5 V to +5 V step](/q/grsim-09-18/solution-step.svg)

The rows confirm each step of the argument:

- Degeneration alone (second row) lowers $f_u$ by exactly 4.85 (6.02 → 1.24 MHz) and leaves the slew rate unchanged.
- Reducing $C$ to 2.06 pF restores $f_u$ to 6.02 MHz and raises the slew rate to 9.54 V/µs, $4.85$ times the original 1.97 V/µs, close to the hand value of 9.7 V/µs. The small shortfall in both columns relative to the hand values comes from the base currents, which take part of the 20-µA tail current.
- In the follower the output now reaches +5 V within 10 mV at 1.11 µs instead of 5.1 µs. The linear settling after the ramp still has the same time constant, $1/\omega_u\approx26$ ns.
