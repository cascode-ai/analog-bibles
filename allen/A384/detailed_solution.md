# Detailed solution - A384

Compute the linear single-pole response first, then compare the slope it demands with the slew rate. If the demanded slope exceeds the slew rate over the whole half-swing, the output moves at the slew rate and the delay is the half-swing divided by it.

### Step 1 — Overdrive and the linear estimate

The resolution is $V_{in}(\min)=(1\ \mathrm V)/10^4=0.1$ mV, so the input is $k=10\ \mathrm{mV}/0.1\ \mathrm{mV}=100$ times the resolution. With $\tau_c=1/(10^5\ \mathrm{rad/s})=10\ \mu$s, the unclipped linear response $v_{out}=A_v(0)V_{in}(1-e^{-t/\tau_c})$ would reach half the swing, a fraction $1/(2k)$ of its final change $A_v(0)V_{in}=100$ V, at

$$
t_{p,\mathrm{lin}}=\tau_c\ln\frac{2k}{2k-1}=(10\ \mu\mathrm s)\ln\frac{200}{199}=50.1\ \mathrm{ns}.
$$

### Step 2 — Required slope versus slew rate

The slope of the linear response is

$$
\frac{dv_{out}}{dt}=\frac{A_v(0)V_{in}}{\tau_c}e^{-t/\tau_c},\qquad
\left.\frac{dv_{out}}{dt}\right|_{t=0}=(100\ \mathrm V)(10^5\ \mathrm{s^{-1}})=10\ \mathrm{V/\mu s}.
$$

Over the half-swing interval ($t\le50$ ns) the exponential factor stays above $e^{-0.005}=0.995$, so the demanded slope remains about 10 V/µs, twice the 5-V/µs slew rate. The output stage cannot supply it, and the output slews for the entire half-swing; the 50-ns linear value is unattainable.

### Step 3 — Slew-limited propagation delay

At the constant slew rate the output covers half of its 1-V swing in

$$
t_p=\frac{(V_{OH}-V_{OL})/2}{SR}=\frac{0.5\ \mathrm V}{5\ \mathrm{V/\mu s}}=0.100\ \mu\mathrm s .
$$

Raising the overdrive from 1 mV (linear case, 0.513 µs) to 10 mV therefore shortens the delay only to 0.1 µs, because the slew rate now limits the speed.
