# Detailed solution - A262

Follow the standard two-stage design order: the slew rate fixes the tail current, GB fixes $g_{m1}$ and the input-device size, the positive ICMR sizes the mirror load, the negative ICMR sizes the tail device, and the phase-margin rule $g_{m6}=10g_{m1}$ with $V_{SG4}=V_{SG6}$ sizes and biases the output stage. All lengths are 1 µm, so each width in micrometres equals the aspect ratio $S=W/L$. The square law gives $g_m=\sqrt{2K'SI_D}$ and $V_{ov}=\sqrt{2I_D/(K'S)}$.

### Step 1 — Tail current from the slew rate

The slew rate of the first stage is the tail current charging $C_c$:

$$
I_5=SR\cdot C_c=(10\ \mathrm{V/\mu s})(2\ \mathrm{pF})=20\ \mu\mathrm A,\qquad I_1=I_2=I_3=I_4=10\ \mu\mathrm A.
$$

### Step 2 — Input pair from GB

With $GB=g_{m1}/C_c$ in rad/s:

$$
g_{m1}=2\pi(10\ \mathrm{MHz})(2\ \mathrm{pF})=125.7\ \mu\mathrm S,\qquad
S_1=S_2=\frac{g_{m1}^2}{2K'_NI_1}=\frac{(125.7\ \mu\mathrm S)^2}{2(110\ \mu\mathrm{A/V^2})(10\ \mu\mathrm A)}=7.18 .
$$

So $W_1=W_2\approx7.2$ µm.

### Step 3 — Mirror load from +ICMR

The largest input common-mode voltage keeps M1 saturated: $V_{in}(\max)=V_{DD}-V_{SG3}+V_{TN}$. Hence

$$
V_{SG3}=V_{DD}+V_{TN}-V_{in}(\max)=1+0.7-0.8=0.9\ \mathrm V,
$$

an overdrive of 0.2 V, and

$$
S_3=S_4=\frac{2I_3}{K'_P(0.2\ \mathrm V)^2}=\frac{2(10\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(0.04\ \mathrm{V^2})}=10,
$$

so $W_3=W_4=10$ µm.

### Step 4 — Tail device from −ICMR

The lowest input keeps M5 saturated: $V_{in}(\min)=V_{SS}+V_{DS5}(\mathrm{sat})+V_{GS1}$. With

$$
V_{GS1}=V_{TN}+\sqrt{\frac{2I_1}{K'_NS_1}}=0.7+\sqrt{\frac{2(10\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(7.18)}}=0.859\ \mathrm V,
$$

$$
V_{DS5}(\mathrm{sat})\le V_{in}(\min)-V_{SS}-V_{GS1}=0+1-0.859=0.141\ \mathrm V,
\qquad
S_5\ge\frac{2I_5}{K'_N(0.141\ \mathrm V)^2}=18.3 .
$$

M5 also mirrors the 10-µA reference in M8 ($S_8=10$) and must carry 20 µA, so $S_5=2S_8=20$, which satisfies the bound ($V_{DS5}(\mathrm{sat})=0.135$ V). Thus $W_5=20$ µm.

### Step 5 — Output stage

The phase-margin rule gives

$$
g_{m6}=10g_{m1}=1.257\ \mathrm{mS}.
$$

$V_{SG4}=V_{SG6}$ means equal overdrives. Since $g_m=K'SV_{ov}$, equal overdrives give $g_{m6}/g_{m4}=S_6/S_4$. With $g_{m4}=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(10\ \mu\mathrm A)}=100\ \mu\mathrm S$:

$$
S_6=S_4\frac{g_{m6}}{g_{m4}}=10\cdot\frac{1257\ \mu\mathrm S}{100\ \mu\mathrm S}=125.7,\qquad
I_6=\frac{g_{m6}^2}{2K'_PS_6}=\frac{(1.257\ \mathrm{mS})^2}{2(50\ \mu\mathrm{A/V^2})(125.7)}=125.7\ \mu\mathrm A.
$$

M7 carries $I_7=I_6$ and mirrors M8: $S_7=S_8\,I_7/I_8=10\times12.57=125.7$. So $W_6\approx W_7\approx126$ µm.

The falling output slews with M6 off: M7's current must supply both $C_L$ and the $I_5$ flowing through $C_c$, so $(I_7-I_5)/C_L=(125.7-20)\ \mu\mathrm A/10\ \mathrm{pF}=10.6$ V/µs, which meets 10 V/µs. (This requires $I_7\ge I_5(1+C_L/C_c)=120$ µA.)

### Step 6 — Design summary and checks

| Device | $W$ (µm), $L=1$ µm | Current |
|---|---|---|
| M1, M2 | 7.2 | 10 µA |
| M3, M4 | 10 | 10 µA |
| M5 | 20 | $I_5=20$ µA |
| M6 | 126 | 126 µA |
| M7 | 126 | $I_7=126$ µA |
| M8 | 10 (given) | 10 µA |

Checks: $|p_2|=g_{m6}/C_L=2\,GB$ and $z=g_{m6}/C_c=10\,GB$, giving $\Phi_M\approx90°-\arctan0.5-\arctan0.1=57.7°$, about 60° as the stated rule intends ($C_c=2$ pF is slightly below the usual $0.22C_L$). The dc gain is

$$
A_v=\frac{g_{m1}}{g_{ds2}+g_{ds4}}\cdot\frac{g_{m6}}{g_{ds6}+g_{ds7}}=\frac{125.7\ \mu\mathrm S}{0.9\ \mu\mathrm S}\cdot\frac{1257\ \mu\mathrm S}{11.3\ \mu\mathrm S}\approx1.55\times10^4,
$$

and the power dissipation is $(2\ \mathrm V)(10+20+125.7)\ \mu\mathrm A\approx0.31$ mW.
