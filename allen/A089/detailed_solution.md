# Detailed solution - A089

The diode-connected M1 converts the input current into $V_{GS}$, and M2 converts that same $V_{GS}$ back into $i_O$. The output is largest when M1 is weak (it needs a large $V_{GS}$ to carry 20 µA) and M2 is strong, and smallest in the opposite case. Evaluate these two worst-case combinations exactly with the square law, then check with a first-order sensitivity estimate.

### Step 1 — Mirror relation

With equal drain voltages (no $\lambda$ mismatch), M1 sets

$$
V_{GS}=V_{T1}+\sqrt{\frac{2I_{in}}{\beta_1}},\qquad \beta_i=K'_i\frac{W_i}{L_i},
$$

and M2 delivers

$$
i_O=\frac{\beta_2}{2}\big(V_{GS}-V_{T2}\big)^2 .
$$

Nominally $\beta=(110\ \mu\mathrm{A/V^2})(3)=330\ \mu\mathrm{A/V^2}$ and $V_{GS}=0.7+\sqrt{40/330}=1.048$ V, giving $i_O=20\ \mu$A.

### Step 2 — Extreme values of $\beta$ and $V_T$

A device is weakest with $K'$ and $W$ at −5%, $L$ at +5% and $V_T$ at +5 mV, and strongest with the opposite signs:

$$
\beta_{weak}=110\ \mu\mathrm{A/V^2}\times0.95\times\frac{3\times0.95}{1.05}=283.6\ \mu\mathrm{A/V^2},\qquad
\beta_{strong}=110\ \mu\mathrm{A/V^2}\times1.05\times\frac{3\times1.05}{0.95}=383.0\ \mu\mathrm{A/V^2}.
$$

### Step 3 — Maximum output current

M1 weak ($\beta_1=283.6\ \mu\mathrm{A/V^2}$, $V_{T1}=0.705$ V) and M2 strong ($\beta_2=383.0\ \mu\mathrm{A/V^2}$, $V_{T2}=0.695$ V):

$$
V_{GS}=0.705\ \mathrm V+\sqrt{\frac{2(20\ \mu\mathrm A)}{283.6\ \mu\mathrm{A/V^2}}}=1.0805\ \mathrm V,\qquad
i_O=\frac{383.0\ \mu\mathrm{A/V^2}}{2}(1.0805-0.695)^2\ \mathrm{V^2}=28.5\ \mu\mathrm A .
$$

### Step 4 — Minimum output current

M1 strong ($\beta_1=383.0\ \mu\mathrm{A/V^2}$, $V_{T1}=0.695$ V) and M2 weak ($\beta_2=283.6\ \mu\mathrm{A/V^2}$, $V_{T2}=0.705$ V):

$$
V_{GS}=0.695\ \mathrm V+\sqrt{\frac{2(20\ \mu\mathrm A)}{383.0\ \mu\mathrm{A/V^2}}}=1.0182\ \mathrm V,\qquad
i_O=\frac{283.6\ \mu\mathrm{A/V^2}}{2}(1.0182-0.705)^2\ \mathrm{V^2}=13.9\ \mu\mathrm A .
$$

### Step 5 — Result and first-order check

$$
i_O(\min)=13.9\ \mu\mathrm A,\qquad i_O(\max)=28.5\ \mu\mathrm A\qquad(\text{nominal }20\ \mu\mathrm A,\ -30\%/+42\%).
$$

To first order,

$$
\frac{i_O}{I_{in}}\approx1+\frac{\Delta K'}{K'}+\frac{\Delta(W/L)}{W/L}-\frac{2\,\Delta V_T}{V_{GS}-V_T},
$$

where each $\Delta$ is the difference between M2 and M1. The worst cases give $\pm(0.10+0.20+2(10\ \mathrm{mV})/0.348\ \mathrm V)=\pm(0.10+0.20+0.057)=\pm36\%$, consistent with the exact −30%/+42%; the exact range is asymmetric because the current depends quadratically on the overdrive. These bounds assume independent variations in the two devices; if they varied together, the ratio would stay 1 and $i_O$ would remain 20 µA.
