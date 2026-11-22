# Detailed solution - grsim-10-04

Each op amp forces the emitter of its transistor to follow its + input, so the input voltage appears exactly across the 10-kΩ resistor, and its current $V_{\text{in}}/10\ \mathrm{k\Omega}$ adds to one bias current and subtracts from the other. The input transistors and their $I_S$ therefore do not matter. The offset comes only from a mismatch between the two bias currents, which are set by emitter-degenerated mirror transistors. Compute that mismatch, convert it to an input voltage, and then simulate the distortion of the converter.

### Step 1 — (a) Output currents

Let $Q_1$, $Q_2$ be the input transistors, with emitters $E_1$, $E_2$, and $Q_A$, $Q_B$ the mirror transistors that sink $I_A$ and $I_B$ from $E_1$ and $E_2$. With ideal op amps, $V_{E1}$ and $V_{E2}$ equal the + inputs, so $V_{E1}-V_{E2}=V_{\text{in}}$ and the 10-kΩ resistor carries $V_{\text{in}}/R$ from $E_1$ to $E_2$. Neglecting base currents, KCL at the emitters gives

$$
I_1=I_A+\frac{V_{\text{in}}}{R},\qquad I_2=I_B-\frac{V_{\text{in}}}{R},\qquad I_1-I_2=(I_A-I_B)+\frac{2V_{\text{in}}}{R}.
$$

The offset voltage, the input that makes $I_1=I_2$, is therefore

$$
V_{OS}=-\frac{R}{2}(I_A-I_B),\qquad |V_{OS}|=(5\ \mathrm{k\Omega})\,|\Delta I|.
$$

The $I_S$ mismatch of $Q_1$ and $Q_2$ only changes the op-amp output voltages needed to drive them; it does not change any current.

### Step 2 — (a) Mismatch of the bias currents

$Q_A$ and $Q_B$ share the base voltage $V_B$ of the reference, and each has a 1-kΩ emitter resistor:

$$
V_B+V_{EE}=I_CR_E+V_T\ln\frac{I_C}{I_S}.
$$

Differentiating, with $V_B$ fixed, for small changes of $R_E$ and $I_S$:

$$
\frac{\Delta I}{I}\left(IR_E+V_T\right)=-IR_E\frac{\Delta R_E}{R_E}+V_T\frac{\Delta I_S}{I_S}
\ \Rightarrow\
\left|\frac{\Delta I}{I}\right|_{\max}=\frac{IR_E(0.003)+V_T(0.02)}{IR_E+V_T}.
$$

With $I=1$ mA, $IR_E=1$ V:

$$
\left|\frac{\Delta I}{I}\right|=\frac{(1\ \mathrm{V})(0.003)+(0.026\ \mathrm{V})(0.02)}{1.026\ \mathrm{V}}=3.43\times10^{-3},\qquad \Delta I=3.43\ \mu\mathrm{A},
$$

$$
|V_{OS}|_{\max}=(5\ \mathrm{k\Omega})(3.43\ \mu\mathrm{A})=17.2\ \mathrm{mV}.
$$

The worst case has the higher-current device with the smaller emitter resistor and the larger $I_S$. The emitter degeneration reduces the effect of the 2 % $I_S$ mismatch by the factor $V_T/(IR_E+V_T)=0.025$, so the 0.3 % resistor mismatch dominates. The reference transistor and its resistor shift both bias currents equally and do not contribute, and the 10-kΩ resistor affects only the transconductance $2/R$. If the ±0.3 % and ±2 % were instead deviations of each part from nominal, the pair differences would double, and $|V_{OS}|\approx34$ mV.

### Step 3 — (b) Simulation setup

The op amps are VCVSs of gain $10^4$ driving the bases. The transistors have $I_S=10^{-16}$ A and $\beta=100$, at a temperature where $V_T=26$ mV. The supplies are ±15 V, the collectors return to +15 V through 0-V sources, and the input is ±5 V sinusoids (20 V peak-to-peak differential) at 1 kHz. A behavioural source forms $I_1-I_2$ for the Fourier analysis, and tight tolerances resolve the very small harmonics.

```spice
* grsim-10-04 voltage-to-current converter
.options temp=28.57 tnom=28.57 reltol=1e-7 abstol=1e-15 vntol=1e-9
.model qn npn is=1e-16 bf=100
VCC vcc 0 15
VEE vee 0 -15
Iref vcc r 1m
Qh vcc r bl qn
Qr r bl er qn
Rr er vee 1k
QA e1 bl ea qn
RA ea vee 1k
QB e2 bl eb qn
RB eb vee 1k
V1 vcc c1 0
V2 vcc c2 0
Q1 c1 b1 e1 qn
Q2 c2 b2 e2 qn
EL b1 0 inL e1 1e4
ER b2 0 inR e2 1e4
R10 e1 e2 10k
VinL inL 0 sin(0 5 1k)
VinR inR 0 sin(0 -5 1k)
Bout out 0 v=i(V1)-i(V2)
Rout out 0 1
.tran 1u 10m 0 1u
.four 1k v(out)
.end
```

As a check of (a), the same circuit with $R_A=1.0015$ kΩ, $R_B=0.9985$ kΩ and $Q_A$, $Q_B$ areas of 0.99 and 1.01 (worst-case directions) has $I_A-I_B=-3.43\ \mu$A and needs $V_{\text{in}}=17.13$ mV to make $I_1=I_2$, in agreement with the 17.2-mV hand result.

### Step 4 — (b) Distortion results

| Harmonic | Amplitude of $I_1-I_2$ | Relative to fundamental |
|---|---|---|
| Fundamental | 1.980 mA | — |
| Second | $1.8\times10^{-14}$ A | $\approx10^{-11}$ (zero) |
| Third | 8.2 nA | $4.2\times10^{-6}$ (0.0004 %) |
| Fifth | 7.9 nA | $4.0\times10^{-6}$ |

The fundamental is $\alpha\cdot2(10\ \mathrm{V})/(10\ \mathrm{k\Omega})=1.98$ mA, as expected. The distortion is extremely small:

- **Second harmonic.** It is zero by symmetry for matched devices.
- **Base-emitter nonlinearity.** The only intrinsic nonlinearity is the residual $V_{BE}(I)/A$ left at each emitter by the finite op-amp gain. Its differential effect is about $(2V_T/A)\tanh^{-1}(V_{\text{in}}/10\ \mathrm{V})$ against a 10-V signal, which gives a third harmonic of order $10^{-7}$.
- **Peak cutoff.** The 20-V drive makes the resistor current reach ±1 mA at the peaks, while the simulated bias currents are 0.9997 mA (slightly below 1 mA because of base currents). One input transistor therefore cuts off very briefly at each peak. This produces the few-$10^{-6}$ odd harmonics seen above.

Any larger drive, or a smaller bias current, would clip $I_1$ or $I_2$ at zero and raise the distortion sharply. Within this range the converter is essentially linear, because the op-amp loops and the resistor define the current. With mismatched bias currents (as in Step 3), the cutoff becomes asymmetric: the simulation then gives second and third harmonics of $4.8\times10^{-5}$ each (0.005 %), still negligible.
