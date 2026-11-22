# Detailed solution - A067

The small-signal transconductance is the derivative of the large-signal drain current with respect to $v_{GS}$ at the operating point. Differentiate the exponential and express the result through the dc current itself.

### Step 1 — Differentiate the weak-inversion current

With $i_D=(W/L)I_{D0}\exp[v_{GS}/(nkT/q)]$, the derivative of an exponential is the exponential times the derivative of its argument:

$$
g_m=\left.\frac{\partial i_D}{\partial v_{GS}}\right|_{V_{GS}}
=\frac WL\,\frac{I_{D0}}{n(kT/q)}\exp\!\left(\frac{V_{GS}}{n(kT/q)}\right).
$$

### Step 2 — Express $g_m$ through the drain current

The factor $(W/L)I_{D0}\exp[V_{GS}/(nkT/q)]$ is the dc drain current $I_D$, so

$$
g_m=\frac{I_D}{n(kT/q)} .
$$

### Step 3 — Interpretation

In weak inversion $g_m$ is proportional to $I_D$ itself, not to $\sqrt{I_D}$ as in strong inversion. At a given current it is independent of $W/L$ and $K'$; the geometry only sets the gate voltage needed for that current. The ratio

$$
\frac{g_m}{I_D}=\frac{1}{n\,kT/q}
$$

is the largest value a MOS transistor can reach; for $n=1.5$ at 300 K it is $1/(38.8\ \mathrm{mV})=25.8\ \mathrm{V^{-1}}$. For example, at $I_D=1\ \mu$A, $g_m=1\ \mu\mathrm A/38.8\ \mathrm{mV}=25.8\ \mu$S.
