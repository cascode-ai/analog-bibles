# Detailed solution - G223

The bias, the small-signal parameters and the device capacitances are those of the stage without the added capacitor. The 20-pF capacitor is open at low frequency, so the transresistance is unchanged. For the bandwidth it adds to $C_{gd1}$, from the gate of $M_1$ to the output, and is Miller-multiplied; all other zero-value time constants are unchanged.

### Step 1 — Bias and small-signal parameters

The diode-connected $M_3$ with the 30-kΩ resistor sets $V_{GS3}=1.097$ V and $I_D=46.8\ \mu$A in all three transistors (square law, $W/L_{\text{eff}}=166.7$ for the NMOS). Then

$$
g_{m1}=\sqrt{2(20\ \mu\mathrm A/\mathrm V^2)(333.3)(46.8\ \mu\mathrm A)}=0.790\ \mathrm{mA/V},\qquad \frac1{g_{m1}}=1.27\ \mathrm{k\Omega},
$$
$$
R_{\text{out}}=r_{o1}\parallel r_{o2}=1.07\ \mathrm{M\Omega}\parallel2.14\ \mathrm{M\Omega}=0.713\ \mathrm{M\Omega}.
$$

### Step 2 — Transresistance

The input current flows through the resistor $1/g_{m1}$ from the source of $M_1$, giving $v_{sg1}=i_i/g_{m1}$ and a drain-current change of exactly $i_i$ into the output:

$$
\frac{v_o}{i_i}=+R_{\text{out}}=0.713\ \mathrm{M\Omega}.
$$

### Step 3 — The Miller capacitor

The 20 pF and $C_{gd1}=28$ fF together, $C_F=20.03$ pF, connect the gate of $M_1$ to the output. With the input current source open, the gate sees $R_g=1/g_{m1}$, so

$$
R_F=R_g+R_{\text{out}}+g_{m1}R_{\text{out}}R_g=1.27\ \mathrm{k\Omega}+0.713\ \mathrm{M\Omega}+0.713\ \mathrm{M\Omega}=1.43\ \mathrm{M\Omega},
$$
$$
C_FR_F=(20.03\ \mathrm{pF})(1.43\ \mathrm{M\Omega})=28.57\ \mu\mathrm s .
$$

### Step 4 — Sum of time constants

The remaining capacitors give the same time constants as without the 20 pF: $C_{db1}$ and $C_{db2}$ (106 fF each with $R_{\text{out}}$) 75.2 ns each, $C_{gd2}$ (14 fF with 1.40 MΩ) 19.6 ns, and $C_{gs1}$ and the mirror-node capacitors about 0.3 ns, about 0.17 µs in all.

$$
T_0=28.57+0.17\ \mu\mathrm s=28.74\ \mu\mathrm s,\qquad f_{-3\text{dB}}\approx\frac1{2\pi T_0}=5.5\ \mathrm{kHz}.
$$

An exact nodal analysis also gives 5.5 kHz, because the Miller capacitor sets a clearly dominant pole. The MOS stage is about four times faster than its bipolar counterpart with the same 20 pF (1.33 kHz), because the resistance at the gate is only $1/g_{m1}$ instead of $r_\pi$, which shrinks the Miller resistance from 5.81 MΩ to 1.43 MΩ.
