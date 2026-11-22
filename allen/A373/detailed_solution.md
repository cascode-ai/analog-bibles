# Detailed solution - A373

The comparator slews when the linear single-pole response would require the output to change faster than the slew rate. The single-pole step response is steepest at the start, so compare that initial slope with SR and solve for the input step.

### Step 1 — Slope of the linear response

For a step $V_{in}$, the single-pole output is

$$
v_{out}(t)=A_v(0)V_{in}\bigl(1-e^{-\omega_ct}\bigr),\qquad
\frac{dv_{out}}{dt}=A_v(0)V_{in}\,\omega_c\,e^{-\omega_ct},
$$

whose largest value, at $t=0$, is $A_v(0)V_{in}\omega_c$.

### Step 2 — Slewing condition

The output slews when this slope exceeds the slew rate:

$$
A_v(0)V_{in}\,\omega_c>SR\quad\Rightarrow\quad
V_{in}>\frac{SR}{A_v(0)\,\omega_c}=\frac{10^6\ \mathrm{V/s}}{(10^4)(10^3\ \mathrm{s^{-1}})}=0.1\ \mathrm V .
$$

So input steps larger than about 100 mV give a slewing response; smaller steps give a linear, single-pole response.

### Step 3 — Check with the half-swing criterion

The delay is defined at half the output swing (0.5 V). Requiring the linear slope still to exceed SR at the moment the output has moved 0.5 V gives, since there $A_v(0)V_{in}e^{-\omega_ct}=A_v(0)V_{in}-0.5\ \mathrm V$,

$$
\omega_c\bigl(A_v(0)V_{in}-0.5\ \mathrm V\bigr)>SR\quad\Rightarrow\quad V_{in}>100.05\ \mathrm{mV},
$$

practically the same threshold. Hence $V_{in}\gtrsim100$ mV.
