# Detailed solution - G212

With an ideal current source at the base of $Q_1$, there is no source resistance to share the signal with, so the input resistance of the Darlington plays no role: all of $i_i$ is base current of $Q_1$. Follow the current through the two current gains to the output.

### Step 1 — Currents in the pair

$$
i_{b1}=i_i,\qquad i_{b2}=i_{e1}=(\beta+1)i_i .
$$

### Step 2 — Output current

Both collectors are tied to the output, so the current in $R_L$ is

$$
i_{c1}+i_{c2}=\beta i_i+\beta(\beta+1)i_i=\beta(\beta+2)\,i_i=10\,200\,i_i .
$$

### Step 3 — Transresistance

$$
\frac{v_o}{i_i}=-\beta(\beta+2)R_L=-(100)(102)(3\ \mathrm{k\Omega})=-30.6\ \mathrm{M\Omega}.
$$

The bias currents ($I_{C1}=10\ \mu$A, $I_{C2}=1$ mA) affect only $r_{\pi1}$ and $r_{\pi2}$, which set the input resistance; with $r_o=\infty$ and a current-source drive, they do not enter the transresistance.
