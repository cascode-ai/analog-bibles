# Detailed solution - A023

In forward bias the ideal diode current is exponential in voltage, so a fixed current ratio corresponds to a fixed voltage step, independent of the operating point. Take the ratio of the currents at two voltages and solve for the difference.

### Step 1 — Forward-bias diode equation

The ideal diode equation is $i_D=I_s\left[\exp(v_D/V_t)-1\right]$ with $V_t=kT/q$. In forward bias with $v_D$ a few $V_t$ or more, the exponential dominates the $-1$:

$$
i_D\approx I_s\exp\!\left(\frac{v_D}{V_t}\right).
$$

### Step 2 — Ratio of two currents

For two forward voltages $v_{D1}$ and $v_{D2}$, the saturation current cancels:

$$
\frac{i_{D2}}{i_{D1}}=\exp\!\left(\frac{v_{D2}-v_{D1}}{V_t}\right)=10
\quad\Rightarrow\quad
\Delta v_D=V_t\ln10 .
$$

### Step 3 — Numerical value

$$
\Delta v_D=(25.9\ \mathrm{mV})(2.303)=59.6\ \mathrm{mV}.
$$

An increase of about 60 mV in forward voltage multiplies the current by 10 at room temperature, whatever the starting current, as long as the diode stays in the exponential region (series resistance and high-level injection make the step larger at high currents).
