# Detailed solution - G205

The input path is the same as in the Darlington: $Q_1$'s emitter current is $Q_2$'s base current. The difference is that $Q_1$'s collector is at ac ground, so only $Q_2$'s collector current reaches $R_L$. Find the base current drawn from the source, then the output current.

### Step 1 — Small-signal parameters

$$
r_{\pi1}=\frac{\beta V_T}{I_{C1}}=\frac{100(26\ \mathrm{mV})}{10\ \mu\mathrm A}=260\ \mathrm{k\Omega},\qquad
r_{\pi2}=\frac{\beta V_T}{I_{C2}}=\frac{100(26\ \mathrm{mV})}{1\ \mathrm{mA}}=2.6\ \mathrm{k\Omega}.
$$

### Step 2 — Input resistance and base current

The emitter follower $Q_1$ carries $(\beta+1)i_{b1}$ into $r_{\pi2}$, so

$$
R_i=r_{\pi1}+(\beta+1)r_{\pi2}=260\ \mathrm{k\Omega}+262.6\ \mathrm{k\Omega}=522.6\ \mathrm{k\Omega},
\qquad
i_{b1}=\frac{v_i}{R_S+R_i}=\frac{v_i}{622.6\ \mathrm{k\Omega}}.
$$

### Step 3 — Output current and gain

$i_{b2}=(\beta+1)i_{b1}$, so $i_{c2}=\beta(\beta+1)i_{b1}=10\,100\,i_{b1}$, and this current alone flows in $R_L$:

$$
\frac{v_o}{v_i}=-\frac{\beta(\beta+1)R_L}{R_S+r_{\pi1}+(\beta+1)r_{\pi2}}
=-\frac{(10\,100)(3\ \mathrm{k\Omega})}{622.6\ \mathrm{k\Omega}}=-48.7 .
$$

The result is slightly below the Darlington's −49.1, because $Q_1$'s collector current ($\beta i_{b1}$, about 1 % of the total) is now returned to ac ground instead of adding to the output.
