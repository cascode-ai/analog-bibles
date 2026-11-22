# Detailed solution - grsim-10-03

The differential output current of an emitter-coupled pair is $I_{\text{out}}=I_{EE}\tanh(V_{id}/2V_T)$ (with $\alpha\approx1$). For a sinusoidal input, the odd part of tanh produces odd harmonics; matched devices produce no even ones. Expanding tanh to its cubic term and using $\sin^3\theta=\tfrac34\sin\theta-\tfrac14\sin3\theta$ gives the third-harmonic ratio as a function of the amplitude, and hence the largest amplitude for 1 % distortion. ngspice transient and Fourier analyses check this, and show the effect of emitter degeneration.

### Step 1 — (a) Series expansion

Let the input be $V_{id}=V_p\sin\omega_ot$ and $a=V_p/2V_T$, so the tanh argument is $x=a\sin\omega_ot$. With $\tanh x\approx x-x^3/3$:

$$
\begin{aligned}
\frac{I_{\text{out}}}{I_{EE}}&\approx a\sin\omega_ot-\frac{a^3}{3}\sin^3\omega_ot
=a\sin\omega_ot-\frac{a^3}{3}\left(\frac34\sin\omega_ot-\frac14\sin3\omega_ot\right)\\
&=\left(a-\frac{a^3}{4}\right)\sin\omega_ot+\frac{a^3}{12}\sin3\omega_ot .
\end{aligned}
$$

Comparing with $I_o(\sin\omega_ot+\delta\sin3\omega_ot)$:

$$
\delta=\frac{a^3/12}{a-a^3/4}=\frac{a^2/12}{1-a^2/4}.
$$

### Step 2 — (a) Maximum amplitude for 1 % third harmonic

Setting $\delta=0.01$:

$$
\frac{a^2}{12}=0.01\left(1-\frac{a^2}{4}\right)\ \Rightarrow\ a^2=\frac{0.12}{1.03}=0.1165,\qquad a=0.341,
$$

$$
V_p=2aV_T=2(0.341)(26\ \mathrm{mV})=17.7\ \mathrm{mV}\ (0.683\,V_T).
$$

Dropping the small $a^2/4$ in the denominator ($\delta\approx a^2/12$) gives $a=0.346$ and $V_p=18.0$ mV. Since the third harmonic grows as $V_p^2$, the input must stay below about 18 mV peak for 1 % distortion.

### Step 3 — (b) SPICE check

The pair uses $I_{EE}=1$ mA and npn transistors with $I_S=10^{-16}$ A, $\beta=100$ and no Early effect, at a temperature where $V_T=26$ mV. The differential input of 17.7 mV peak is applied as $\pm8.85$ mV to the two bases at 1 kHz. A behavioural source converts $I_{c1}-I_{c2}$ (measured by 0-V sources in the collectors) into a voltage for the Fourier analysis. Tight tolerances are needed to resolve harmonics far below the fundamental.

```spice
* grsim-10-03 emitter-coupled pair (RE = 1m for part (b), 200 for part (c))
.options temp=28.57 tnom=28.57 reltol=1e-7 abstol=1e-15 vntol=1e-9
.model qn npn is=1e-16 bf=100
VCC vcc 0 5
VEE vee 0 -5
Vc1 vcc c1 0
Vc2 vcc c2 0
Q1 c1 b1 e1 qn
Q2 c2 b2 e2 qn
RE1 e1 t 1m
RE2 e2 t 1m
IEE t vee 1m
Vp b1 0 sin(0 8.85m 1k)
Vn b2 0 sin(0 -8.85m 1k)
Bout out 0 v=i(Vc1)-i(Vc2)
Rout out 0 1
.tran 1u 10m 0 1u
.four 1k v(out)
.end
```

| Harmonic | Amplitude | Relative to fundamental |
|---|---|---|
| Fundamental | 0.328 mA | — |
| Second | $1.6\times10^{-15}$ A | $\approx5\times10^{-12}$ (numerical noise) |
| Third | 3.07 µA | 0.94 % |

The exact tanh characteristic gives 0.94 % at 17.7 mV, slightly below the 1 % target. The two-term series overestimates the distortion a little, so the hand result is confirmed and slightly conservative. The second harmonic is zero because the devices are matched. The fundamental, $0.328I_{EE}$, is close to $I_{EE}(a-a^3/4)=0.331I_{EE}$; finite $\beta$ scales both currents by $\alpha$ and leaves the ratio unchanged.

### Step 4 — (c) Emitter degeneration

$R_E=200\ \Omega$ in each emitter gives $I_ER_E=(0.5\ \mathrm{mA})(200\ \Omega)=100$ mV at balance. The same deck with `RE1`, `RE2` set to 200 Ω and the same 17.7-mV input gives:

| Harmonic | Amplitude | Relative to fundamental |
|---|---|---|
| Fundamental | 69.5 µA | — |
| Third | 5.91 nA | 0.0085 % ($8.5\times10^{-5}$) |

The degeneration reduces the third harmonic by a factor of about 110 and the fundamental by 4.7.

A hand check confirms this. With $y=I_{\text{out}}/I_{EE}$, the input splits between the junctions and the resistors:

$$
V_{id}=2V_T\tanh^{-1}y+I_{EE}R_E\,y\approx\underbrace{(2V_T+I_{EE}R_E)}_{g=0.252\ \mathrm{V}}\,y+\frac{2V_T}{3}y^3 .
$$

Inverting the series gives $y\approx V_{id}/g-(2V_T/3)V_{id}^3/g^4$, so

$$
HD_3\approx\frac{V_TV_p^2}{6g^3}=\frac{(0.026)(0.0177)^2}{6(0.252)^3}=8.5\times10^{-5},
$$

in agreement with the simulation. Compared with the undegenerated pair, the distortion falls by $(g/2V_T)^3=(1+g_mR_E)^3=4.85^3\approx114$, while the gain falls only by $g/2V_T=4.85$. This is the usual trade: local feedback through $R_E$ linearises the stage far more than it reduces the gain.
