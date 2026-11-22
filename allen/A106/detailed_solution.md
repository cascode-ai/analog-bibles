# Detailed solution - A106

The ideal PMOS mirror makes the currents of the two bipolar branches equal. Because Q3 and Q4 share the base node, the difference of their base–emitter voltages appears across $R_1$; with a 10:1 area ratio and equal currents this fixes the current. $V_{REF}$ is then the base–emitter voltage of the diode-connected Q4 plus the drop across $R_2$.

### Step 1 — Equal branch currents

M1 is diode-connected and M1, M2 form an ideal mirror with equal $W/L$, so $I_2=I_1\equiv I$. With $\beta\approx\infty$ there are no base currents: $I_1$ is the collector (= emitter) current of Q3 and flows through $R_1$, and $I_2$ flows through $R_2$ into the diode-connected Q4. Both transistors are in the forward-active region with $I_C=I_s\exp(V_{BE}/V_{th})$.

### Step 2 — Current set by $R_1$

The bases are tied together and Q4's emitter is grounded, so the base node is at $V_{BE4}$, while Q3's emitter sits $IR_1$ above ground:

$$
V_{BE4}=V_{BE3}+IR_1 .
$$

Q3 has $I_{s3}=10I_{s4}=1$ pA and Q4 has $I_{s4}=100$ fA. At equal current,

$$
IR_1=V_{th}\ln\frac{I}{I_{s4}}-V_{th}\ln\frac{I}{10I_{s4}}=V_{th}\ln10=(26\ \mathrm{mV})(2.3026)=59.87\ \mathrm{mV},
$$

$$
I=\frac{59.87\ \mathrm{mV}}{1.2\ \mathrm{k\Omega}}=49.89\ \mu\mathrm A .
$$

The larger device Q3 has the smaller $V_{BE}$, which is what makes $IR_1$ positive.

### Step 3 — Base–emitter voltage of Q4

Q4 is the ×1 device:

$$
V_{BE4}=V_{th}\ln\frac{I}{I_{s4}}=(26\ \mathrm{mV})\ln\frac{49.89\ \mu\mathrm A}{100\ \mathrm{fA}}=0.5207\ \mathrm V .
$$

### Step 4 — Reference voltage

$V_{REF}$ is taken from the drain of M2 to ground, across $R_2$ in series with Q4:

$$
V_{REF}=V_{BE4}+IR_2=0.5207\ \mathrm V+(49.89\ \mu\mathrm A)(13\ \mathrm{k\Omega})=0.5207+0.6486\ \mathrm V=1.169\ \mathrm V .
$$

The term $IR_2=(R_2/R_1)V_{th}\ln10$ is PTAT and the $V_{BE}$ term decreases with temperature, which is the bandgap principle; here $V_{REF}\approx1.169$ V at room temperature. The stated $W/L=10$ does not enter, because the mirror is ideal and only the current ratio matters.
