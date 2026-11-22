# Detailed solution - A385

As for any step input, compare the slope the linear single-pole response would demand with the slew rate. If it exceeds the slew rate over the whole half-swing, the output slews and the delay is the half-swing divided by the slew rate.

### Step 1 — Overdrive and the linear estimate

The resolution is $V_{in}(\min)=(1\ \mathrm V)/10^4=0.1$ mV, so $k=100\ \mathrm{mV}/0.1\ \mathrm{mV}=1000$. With $\tau_c=1/(10^5\ \mathrm{rad/s})=10\ \mu$s, the unclipped linear response $v_{out}=A_v(0)V_{in}(1-e^{-t/\tau_c})$, whose final change is $A_v(0)V_{in}=1000$ V, would cover the 0.5-V half-swing, a fraction $1/(2k)$, at

$$
t_{p,\mathrm{lin}}=\tau_c\ln\frac{2k}{2k-1}=(10\ \mu\mathrm s)\ln\frac{2000}{1999}=5.0\ \mathrm{ns}.
$$

### Step 2 — Required slope versus slew rate

The linear response would start with slope

$$
\left.\frac{dv_{out}}{dt}\right|_{t=0}=\frac{A_v(0)V_{in}}{\tau_c}=(1000\ \mathrm V)(10^5\ \mathrm{s^{-1}})=100\ \mathrm{V/\mu s},
$$

and within the first 5 ns the factor $e^{-t/\tau_c}$ falls by only 0.05 %. The demanded slope is therefore twenty times the 5-V/µs slew rate during the entire half-swing, so the output slews from start to midpoint.

### Step 3 — Slew-limited propagation delay

$$
t_p=\frac{(V_{OH}-V_{OL})/2}{SR}=\frac{0.5\ \mathrm V}{5\ \mathrm{V/\mu s}}=0.100\ \mu\mathrm s .
$$

This equals the result for a 10-mV input: once the comparator slews, further overdrive no longer reduces the delay.
