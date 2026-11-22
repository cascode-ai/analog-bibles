# Detailed solution - A312

Each inverter of the crossover stage is an n-channel driver (M1 or M2) loaded by a p-channel current source (M3 or M4) mirrored from M7. With an ideal current-source load the output switches abruptly at the input voltage where the driver, in saturation, carries exactly the load current. Find the two load currents from the mirror ratios, then the two switching voltages from the square law; their difference is the crossover voltage.

### Step 1 — Load currents

M7 (240/14) carries 100 µA and sets the common gate voltage of M3 and M4, which therefore carry currents in proportion to their $W/L$ (all have $L=14$ µm):

$$
I_3=100\ \mu\mathrm A\cdot\frac{144}{240}=60\ \mu\mathrm A,\qquad I_4=100\ \mu\mathrm A\cdot\frac{240}{240}=100\ \mu\mathrm A .
$$

### Step 2 — Switching voltages

At the switching point the driver is saturated with $I_D$ equal to the load current, so

$$
V_{GS}=V_{TN}+\sqrt{\frac{2I_D}{K'_N(W/L)}} .
$$

For the M1–M3 inverter (M1 = 460/7.5):

$$
V_A=0.7\ \mathrm V+\sqrt{\frac{2(60\ \mu\mathrm A)}{(47\ \mu\mathrm{A/V^2})(460/7.5)}}=0.7+0.204=0.904\ \mathrm V .
$$

For the M2–M4 inverter (M2 = 360/7.5):

$$
V_B=0.7\ \mathrm V+\sqrt{\frac{2(100\ \mu\mathrm A)}{(47\ \mu\mathrm{A/V^2})(360/7.5)}}=0.7+0.298=0.998\ \mathrm V .
$$

Both are measured from $V_{SS}$, since the drivers' sources are at $V_{SS}$.

### Step 3 — Crossover voltage

$$
V_C=V_B-V_A=0.998-0.904=0.094\ \mathrm V\approx0.1\ \mathrm V .
$$

Above $V_A$ the M1–M3 output is low and M5 is off; below $V_B$ the M2–M4 output is high and M6 is off. For $V_A<v_{in}'<V_B$ both output devices are off: a small positive dead band that keeps the quiescent current of the output stage low. (With channel-length modulation included, the midpoints move slightly, to about 0.89 V and 0.98 V, and $V_C$ stays near 0.09 V.)
