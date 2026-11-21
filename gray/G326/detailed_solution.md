# Detailed solution - G326

First fix $C_L$ from the 45° requirement. Then find the largest current the output can deliver into $C_L$ when the input pair is driven hard: in this single-stage amplifier with a mirror load, that current is the full tail current in either direction.

### Step 1 — Load capacitance for 45°

The output pole $-1/(R_oC_L)$ is dominant, so the unity-gain frequency is $\omega_u\approx g_{m1}/C_L$. The nondominant pole $|p_2|=200$ Mrad/s is independent of $C_L$. A 45° margin places $|p_2|$ at $\omega_u$:
$$
C_L=\frac{g_{m1}}{|p_2|}=\frac{0.3\ \mathrm{mA/V}}{2\times10^8\ \mathrm{rad/s}}=1.5\ \mathrm{pF}.
$$
An exact two-pole crossover calculation instead gives $C_L=g_{m1}/(\sqrt2\,|p_2|)=1.06$ pF.

### Step 2 — Output current while slewing

A large differential input turns one transistor of the pair off and steers all of $I_{\text{TAIL}}$ through the other. The two cases are:

- $M_1$ off, $M_2$ carries $I_{\text{TAIL}}$. $M_3$ and its mirror copy $M_4$ carry nothing, so $M_2$–$M_{2A}$ pull $I_{\text{TAIL}}$ out of the output.
- $M_2$ off, $M_1$ carries $I_{\text{TAIL}}$. The $M_3$–$M_4$ mirror copies it, and $M_4$–$M_{4A}$ push $I_{\text{TAIL}}$ into the output, with nothing drawn by $M_{2A}$.

The output current is therefore limited to $\pm I_{\text{TAIL}}$, and it all charges $C_L$.

### Step 3 — Slew rate

$$
SR=\left|\frac{dV_o}{dt}\right|_{\max}=\frac{I_{\text{TAIL}}}{C_L}=\frac{0.5\ \mathrm{mA}}{1.5\ \mathrm{pF}}=3.33\times10^8\ \mathrm{V/s}=333\ \mathrm{V/\mu s},
$$
the same for rising and falling outputs. With the exact-crossover value $C_L=1.06$ pF, the slew rate is $0.5\ \mathrm{mA}/1.06\ \mathrm{pF}=471\ \mathrm{V/\mu s}$.
