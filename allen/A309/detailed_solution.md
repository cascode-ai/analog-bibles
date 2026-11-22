# Detailed solution - A309

The servo loop fixes the output of the op amp under test at $v_{SET}$, while the supply sources move both rails by the same $v_{SET}$. Relative to its own supplies the op amp therefore sees its output unchanged and both inputs moved by $-v_{SET}$, which is a pure common-mode input. The differential input needed to cancel its effect is $v_{SET}/\mathrm{CMRR}$, and the divider makes it visible at $v_{OS}$ multiplied by about 1000.

### Step 1 — The servo forces $v_{OUT}=v_{SET}$

The auxiliary op amp's inverting input is a virtual ground drawing no current; the upper-right source puts $-v_{SET}$ at its resistor end, so

$$
\frac{v_{OUT}}{100\ \mathrm{k\Omega}}+\frac{-v_{SET}}{100\ \mathrm{k\Omega}}=0\;\Rightarrow\;v_{OUT}=v_{SET}.
$$

### Step 2 — Equal supply shift is a common-mode input

The rails become $V_{DD}+v_{SET}$ and $-V_{SS}+v_{SET}$. The op amp has no ground terminal, so shift all its voltages by $-v_{SET}$: its supplies return to their nominal values, its output ($v_{SET}$) returns to 0, and both inputs, which are near 0 V, move to $-v_{SET}$. Thus the op amp sees a common-mode input change $v_{ic}=-v_{SET}$ with zero output change.

### Step 3 — Required differential input

For the output not to change, $A_vv_{id}+A_cv_{ic}=0$, so in magnitude

$$
v_{id}=\frac{A_c}{A_v}v_{SET}=\frac{v_{SET}}{\mathrm{CMRR}},
$$

where $v_{id}$ is $v_I$ measured from the op amp's fixed input offset $V_{off}$. The divider gives $v_I=v_{OS}\cdot10/10010$, hence

$$
v_{OS}=1001\left(\frac{v_{SET}}{\mathrm{CMRR}}+V_{off}\right)\approx\frac{1000\,v_{SET}}{\mathrm{CMRR}}+1001V_{off} .
$$

### Step 4 — (a) Two dc measurements

With all sources at +1 V and then at −1 V, the offset term is the same in both readings and cancels in the difference:

$$
V_{OS1}-V_{OS2}=\frac{1000\,[(+1)-(-1)]\ \mathrm V}{\mathrm{CMRR}}\;\Rightarrow\;\mathrm{CMRR}=\frac{2000\ \mathrm V}{|V_{OS1}-V_{OS2}|} .
$$

### Step 5 — (b) Small-signal measurement

With equal small-signal sources $v_{icm}$, the dc offset drops out of the small-signal quantities, and

$$
v_{os}=\frac{1000\,v_{icm}}{\mathrm{CMRR}}\;\Rightarrow\;\mathrm{CMRR}=\frac{1000\,v_{icm}}{v_{os}} .
$$

Sweeping the frequency of $v_{icm}$ gives CMRR versus frequency, as long as the servo loop still holds $v_{OUT}=v_{SET}$ at that frequency. Replacing 1001 by 1000 introduces only a 0.1 % error.
