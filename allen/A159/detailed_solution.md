# Detailed solution - A159

With device capacitances neglected, the load capacitor is the only capacitance in the circuit, so the response has a single pole set by $C_L$ and the resistance at the output node. Find that resistance from the bias currents, then the pole frequency.

### Step 1 — Output resistance

The 1:1 mirrors bias M6, M7 at 100 µA and M1–M4 at 50 µA (KCL at M1's drain, $I_3=I_6-I_1=50\ \mu$A). The output node joins the drains of M2, M4 and M7. For small signals M2's source is an ac ground for the differential input and the gates of M4 and M7 are held, so each contributes its channel-length-modulation conductance $g_{ds}=\lambda I_D$:

$$
\begin{aligned}
g_{out}&=g_{ds2}+g_{ds4}+g_{ds7}=\lambda_NI_2+\lambda_NI_4+\lambda_PI_7\\
&=(0.04)(50\ \mu\mathrm A)+(0.04)(50\ \mu\mathrm A)+(0.05)(100\ \mu\mathrm A)=9\ \mu\mathrm S,
\end{aligned}
$$

so $R_{out}=1/g_{out}=111$ kΩ.

### Step 2 — Transfer function and −3 dB frequency

The input pair and the M3–M4 mirror inject $g_{m1}V_{in}$ into the output node; with no other capacitance, the mirror node responds instantly. KCL at the output with $C_L=10$ pF gives

$$
\frac{V_o(s)}{V_{in}(s)}=\frac{g_{m1}}{g_{out}+sC_L}=\frac{g_{m1}/g_{out}}{1+s/\omega_{-3\,\mathrm{dB}}},\qquad
\omega_{-3\,\mathrm{dB}}=\frac{g_{out}}{C_L}=\frac{9\ \mu\mathrm S}{10\ \mathrm{pF}}=9.0\times10^{5}\ \mathrm{rad/s}.
$$

In hertz,

$$
f_{-3\,\mathrm{dB}}=\frac{g_{out}}{2\pi C_L}=\frac{9\ \mu\mathrm S}{2\pi(10\ \mathrm{pF})}=143\ \mathrm{kHz}.
$$
