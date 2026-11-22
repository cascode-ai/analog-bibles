# Detailed solution - grsim-04-09

In the Wilson mirror, $Q_3$ (diode) and $Q_1$ form a mirror that senses $Q_2$'s emitter current and pulls the same current from the input node. That negative feedback holds $Q_2$'s emitter current nearly constant. Trace a test current through this loop to obtain $R_o$, evaluate the bias, and then check $R_o$, the $\beta_F$ sensitivity and the large-signal curve in ngspice with the full device model.

### Step 1 — Bias

$Q_2$'s base (the input node) is two $V_{BE}$ above ground, and with $I_C\approx1$ mA, $V_{BE}=26\ \mathrm{mV}\ln(1\ \mathrm{mA}/5\times10^{-15}\ \mathrm A)=0.677$ V:

$$
I_{IN}=\frac{15\ \mathrm V-2(0.677\ \mathrm V)}{13.7\ \mathrm{k\Omega}}=0.996\ \mathrm{mA},\qquad
I_{OUT}=I_{IN}\left[1-\frac2{\beta_F^2+2\beta_F+2}\right]=0.996\ \mathrm{mA}.
$$

The error term is only $2/40402=0.005\%$ at $\beta_F=200$.

### Step 2 — Small-signal parameters

$$
r_{o1}=r_{o2}=\frac{V_A}{I_C}=\frac{130\ \mathrm V}{0.996\ \mathrm{mA}}=130.5\ \mathrm{k\Omega},\qquad
r_{\pi2}=\frac{\beta_0V_T}{I_C}=5.22\ \mathrm{k\Omega},\qquad
R_n=R\parallel r_{o1}=13.7\ \mathrm{k\Omega}\parallel130.5\ \mathrm{k\Omega}=12.4\ \mathrm{k\Omega}.
$$

$R_n$ is the resistance from the input node to ac ground other than through $Q_2$. The emitter node of $Q_2$ sits on diode $Q_3$, about $1/g_m=26\ \Omega$, so its voltage is negligible.

### Step 3 — Output resistance

Inject $i_t$ into $Q_2$'s collector and let $i_{b2}$ be the current into its base. $Q_2$'s emitter current $i_t+i_{b2}$ flows into diode $Q_3$, and $Q_1$ mirrors it, pulling $i_{c1}=i_t+i_{b2}$ from the input node. KCL at the input node, with $v_n\approx r_{\pi2}i_{b2}$:

$$
\frac{v_n}{R_n}+i_{c1}+i_{b2}=0
\;\Rightarrow\;
i_{b2}\left(\frac{r_{\pi2}}{R_n}+2\right)=-i_t
\;\Rightarrow\;
i_{b2}=-\frac{i_t}{2+r_{\pi2}/R_n}.
$$

The collector current of $Q_2$ is $g_{m2}r_{\pi2}i_{b2}$ plus the current through $r_{o2}$, so

$$
R_o=\frac{v_x}{i_t}=r_{o2}\left[1+\frac{\beta_0}{2+r_{\pi2}/R_n}\right]
=130.5\ \mathrm{k\Omega}\left[1+\frac{200}{2+0.421}\right]=10.9\ \mathrm{M\Omega}.
$$

With an ideal current source driving the input node ($R_n\to\infty$) this becomes the familiar $\beta_0r_{o2}/2\approx13$ MΩ. The 13.7-kΩ resistor lets some of the base-current change escape, which lowers the boost slightly.

### Step 4 — Change of $I_{OUT}$ for a 5-V change of $V_{OUT}$

$$
\frac{\Delta I_{OUT}}{I_{OUT}}=\frac{\Delta V_{OUT}}{R_oI_{OUT}}=\frac{5\ \mathrm V}{(10.9\ \mathrm{M\Omega})(0.996\ \mathrm{mA})}=0.046\% .
$$

### Step 5 — $\beta_F$ sensitivity (hand)

At $\beta_F=100$ the error term becomes $2/10202=0.020\%$, so the dc current falls by only about $0.020-0.005=0.015\%$. The Wilson feedback cancels the first-order base-current error, leaving an error of order $2/\beta_F^2$. $R_o$, however, is proportional to $\beta_0$, so it falls to about 6.0 MΩ (with $r_{\pi2}=2.61$ kΩ).

### Step 6 — SPICE check

```spice
* grsim-04-09 Wilson current mirror (full model)
VCC  vcc 0 15
R    vcc n 13.7k
Q1   n b 0 npn
Q3   b b 0 npn
Q2   out n b npn
VOUT out 0 5
.model npn npn is=5e-15 bf=200 vaf=130 rb=200 tf=0.35n cje=1p cjc=0.3p cjs=3p
.control
op
tf v(b) VOUT
print all
dc VOUT 0 15 2m
let iout = -i(VOUT)
wrdata iv.txt iout
.endc
.end
```

The run was repeated with `bf=100`. The `.tf` input resistance at VOUT = 5 V is $R_o$.

| Quantity | Hand | ngspice, $\beta_F=200$ | ngspice, $\beta_F=100$ |
|---|---|---|---|
| $I_{OUT}$ at 5 V | 0.996 mA | 0.9917 mA | 0.9917 mA |
| $R_o$ | 10.9 MΩ | 11.4 MΩ | 6.3 MΩ |
| $\Delta I_{OUT}/I_{OUT}$, 5 → 10 V | 0.046% | 0.043% | 0.077% |
| $I_{OUT}$ change for $\beta_F$: 200 → 100 | −0.015% | −0.021% at 2 V; +0.001% at 5 V | |

![ngspice IOUT versus VOUT of the Wilson mirror from 0 to 15 V for BF = 200 and BF = 100](/q/grsim-04-09/solution-iv.svg)

$R_o$ and the percentage change agree with the hand analysis within 5%. $I_{OUT}$ is about 0.4% below the hand value, because $Q_1$ ($V_{CE}=2V_{BE}$) and $Q_3$ ($V_{CE}=V_{BE}$) operate at different collector voltages, an Early-effect mismatch the hand analysis ignores, and because $r_b$ shifts the $V_{BE}$ values slightly. The $\beta_F$ sensitivity is tiny in both: the dc error changes by about 0.015–0.02%, and at higher $V_{OUT}$ the change of $R_o$ (it halves with $\beta_F$) offsets it.

The large-signal curve is flat at about 0.992 mA from the knee near 0.85 V ($\approx V_{BE}+V_{CE(\mathrm{sat})}$) up to 15 V, with a slope of 0.085 μA/V. Below the knee $Q_2$ saturates and the current falls steeply. Below about 0.67 V it reverses: $Q_2$'s base–collector junction becomes forward biased and the current through $R$ (about 1 mA) flows out of the output terminal, so $I_{OUT}\approx-1.03$ mA at $V_{OUT}=0$.
