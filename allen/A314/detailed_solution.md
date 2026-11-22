# Detailed solution - A314

The buffer is a shunt-feedback (voltage-sampling) amplifier: the output is fed straight back to the gate of M1, so the closed-loop output resistance is the open-loop output resistance divided by $1+|LG|$, where $LG$ is the loop gain from M1's gate around to the output. Widening M1 and M2 raises their transconductance and hence the loop gain; the rest of the circuit is unchanged. With $C_L$ as the only capacitance, the output node then sets the bandwidth. All devices are saturated; $g_m=\sqrt{2K'(W/L)I_D}$, $g_{ds}=\lambda I_D$.

### Step 1 — Bias currents

M5 (1/1) mirrors the 200 µA in M10 (1/1), so M1–M4 carry 100 µA each. M8 and M6 (10/1) mirror M3 and M4 (1/1) ten times, carrying 1 mA; M9 (10/1) passes M8's 1 mA to M7 (10/1), which carries 1 mA.

### Step 2 — Open-loop output resistance and transconductances

$$
R_o=\frac1{g_{ds6}+g_{ds7}}=\frac1{(0.05+0.04)(1\ \mathrm{mA})}=11.11\ \mathrm{k\Omega},
$$
$$
g_{m2}=\sqrt{2(110\ \mu\mathrm{A/V^2})(100)(100\ \mu\mathrm A)}=1.483\ \mathrm{mS},\quad
g_{m4}=\sqrt{2(50\ \mu\mathrm{A/V^2})(1)(100\ \mu\mathrm A)}=100\ \mu\mathrm S,\quad
g_{m6}=g_{m8}=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(1\ \mathrm{mA})}=1\ \mathrm{mS}.
$$

($g_{m1}=g_{m2}$ was 0.469 mS with 10-µm devices.)

### Step 3 — Loop gain

Break the loop at M1's gate and apply $v_t$. The pair produces $\pm g_{m2}v_t/2$. M1's change flows in the diode M3 ($1/g_{m3}=1/g_{m4}$) and is copied by M8 with gain $g_{m8}/g_{m4}=10$, then by M9–M7 with gain 1, increasing the sink current at the output; M2's opposite change, through M4 and M6 (gain $g_{m6}/g_{m4}=10$), reduces the source current. Both push the output down:

$$
|LG|=\frac12\cdot\frac{g_{m2}}{g_{m4}}(g_{m6}+g_{m8})R_o=\frac12(14.83)(2\ \mathrm{mS})(11.11\ \mathrm{k\Omega})=164.8 .
$$

### Step 4 — Closed-loop output resistance

$$
R_{out}=\frac{R_o}{1+|LG|}=\frac{11.11\ \mathrm{k\Omega}}{165.8}=67.0\ \Omega,
$$

compared with 209 Ω for the original 10-µm devices (loop gain 52.1).

### Step 5 — −3 dB frequency

No device capacitances are given, so $C_L$ is the only dynamic element and the output node is the single pole:

$$
f_{-3\,dB}=\frac1{2\pi R_{out}C_L}=\frac1{2\pi(67.0\ \Omega)(10\ \mathrm{pF})}=237\ \mathrm{MHz}.
$$

Keeping every $g_{ds}$ (the diode nodes load at $g_{m4}+g_{ds4}+g_{ds2}=109\ \mu$S and the M8→M9→M7 transfer is about 0.943) lowers the loop gain to about 147, giving $R_{out}\approx75\ \Omega$ and $f_{-3\,dB}\approx212$ MHz; the simpler estimate is within the accuracy of the model.
