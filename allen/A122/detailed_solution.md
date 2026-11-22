# Detailed solution - A122

M2 is the n-channel current sink whose gate is held at $V_{GG}$ with its source grounded, so its gate–source voltage is simply $V_{GG}$. Setting M2's saturation current to 100 µA with its own parameters gives $V_{GG}$ directly; M1 must then be biased (by the dc level of $v_{in}$) to carry the same current.

### Step 1 — Saturation current of M2

M2 is saturated and channel-length modulation is neglected for the bias, so with $V_{GS2}=V_{GG}$:

$$
I_D=\frac{K'_N}{2}\frac{W_2}{L_2}(V_{GG}-V_{TN})^2 ,
\qquad K'_N\frac{W_2}{L_2}=(110\ \mu\mathrm{A/V^2})(1)=110\ \mu\mathrm{A/V^2}.
$$

### Step 2 — Solve for $V_{GG}$

$$
V_{GG}-0.7\ \mathrm V=\sqrt{\frac{2(100\ \mu\mathrm A)}{110\ \mu\mathrm{A/V^2}}}=\sqrt{1.818\ \mathrm{V^2}}=1.348\ \mathrm V,
\qquad V_{GG}=2.048\ \mathrm V\approx2.05\ \mathrm V .
$$

Only M2's parameters enter: its size (1 µm/1 µm) and the n-channel $K'_N$ and $V_{TN}$. The p-channel M1 does not set $V_{GG}$; it carries 100 µA only when $v_{in}$ is at the matching dc level, and both devices must keep enough $V_{DS}$ to stay saturated (M2 needs $V_{DS2}\ge1.348$ V).
