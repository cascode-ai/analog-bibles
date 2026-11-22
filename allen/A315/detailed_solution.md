# Detailed solution - A315

The buffer is a differential pair whose output is fed back to the gate of M2, so it is a unity-gain follower with shunt (voltage) feedback at the output. Its output resistance is the open-loop resistance of the output stage M6–M7 divided by $1+|LG|$. The current mirrors amplify the pair's signal current tenfold into M6 and M7, which also fixes the largest current available to a resistive load. All devices are saturated with $i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$; channel-length modulation is used only for $r_{ds}$.

### Step 1 — Quiescent currents

M1 and M2 share M5's 100 µA, 50 µA each. M3 and M4 (diodes, 10/1) carry these 50 µA. M8 (10/1) copies M3: 50 µA, which flows in the diode M9 (10/1) and is copied by M7 (100/1) ten times: 500 µA. M6 (100/1) copies M4 (10/1) ten times: 500 µA.

### Step 2 — Open-loop output resistance

$$
R_o=\frac1{g_{ds6}+g_{ds7}}=\frac1{(0.05+0.04)(500\ \mu\mathrm A)}=22.2\ \mathrm{k\Omega}.
$$

### Step 3 — Loop gain and closed-loop output resistance

A signal $v$ at the output (M2's gate) produces $\pm g_{m1}v/2$ in the pair. M2's change flows in M3 and reaches the output through M8, M9 and M7 with total current gain 10, increasing the sink current; M1's opposite change flows in M4 and reaches the output through M6 with gain 10, reducing the source current. With $g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=331.7\ \mu$S:

$$
|LG|=\frac12g_{m1}(10+10)R_o=10\,g_{m1}R_o=10(331.7\ \mu\mathrm S)(22.2\ \mathrm{k\Omega})=73.7,
$$
$$
R_{out}=\frac{R_o}{1+|LG|}=\frac{22.2\ \mathrm{k\Omega}}{74.7}=297\ \Omega .
$$

### Step 4 — Bandwidth with 50 pF

With the 50-pF load as the only capacitance, the output node is the single pole:

$$
f_{-3\,dB}=\frac1{2\pi R_{out}C_L}=\frac1{2\pi(297\ \Omega)(50\ \mathrm{pF})}=10.7\ \mathrm{MHz}.
$$

### Step 5 — Output swing into 1 kΩ

The largest current M6 can source occurs when M1 takes the whole 100 µA: M4 carries 100 µA and M6 carries $10\times100\ \mu\mathrm A=1$ mA while M7 is off (M2, M3, M8, M9 carry nothing). Hence

$$
v_{OUT}(\max)=(1\ \mathrm{mA})(1\ \mathrm{k\Omega})=+1\ \mathrm V,
$$

and symmetrically M7 can sink at most 1 mA, so $v_{OUT}(\min)=-1$ V. The voltage headroom is not the limit: M6 at 1 mA needs only $V_{SD}(\mathrm{sat})=\sqrt{2(1\ \mathrm{mA})/(50\ \mu\mathrm{A/V^2}\cdot100)}=0.63$ V, far less than the 2 V available.

### Step 6 — Quiescent power

The supply current flows in three branches: the M5 tail (100 µA through M3/M4 and the pair), M8–M9 (50 µA) and M6–M7 (500 µA):

$$
P_{diss}=(V_{DD}-V_{SS})(I_5+I_8+I_6)=(6\ \mathrm V)(100+50+500)\ \mu\mathrm A=3.9\ \mathrm{mW}.
$$

These values use the standard hand model (ideal tail, mirror ratios set by $W/L$ alone). If channel-length modulation is kept in the dc bias, the unequal mirror $V_{DS}$ raise $I_6=I_7$ to about 590 µA, and a level-1 simulation gives about 246 Ω, 13 MHz and 4.45 mW.
