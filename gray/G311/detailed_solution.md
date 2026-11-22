# Detailed solution - G311

Compare the steepest slope of the input sinusoid with the slew rate. If the slope exceeds the slew rate, the follower output tracks the sine only where the sine is slow enough, near its peaks, and moves in straight lines at the slew rate elsewhere. The break and rejoin points follow from matching slopes and from the intersection of the ramp with the sine.

### Step 1 — Slew rate versus input slope

With the 10-pF Miller capacitor, the output slews at
$$
SR=\frac{I_{EE}}{C}=\frac{20\ \mu\mathrm A}{10\ \mathrm{pF}}=2\ \mathrm{V/\mu s},
$$
because a large error steers all of $I_{EE}$ through $C$ while the second stage holds the base of $Q_5$ fixed. The input $V_i=\hat V\sin\omega t$, with $\hat V=10$ V and $f=45$ kHz, has a peak slope of
$$
\omega\hat V=2\pi\times45\ \mathrm{kHz}\times10\ \mathrm V=2.83\ \mathrm{V/\mu s}>SR .
$$
The output therefore cannot follow the input near the zero crossings. For 10 V, the full-power frequency is only $SR/(2\pi\hat V)=31.8$ kHz.

### Step 2 — Where the output leaves the sine

While the error is small, the loop is linear and fast: the closed-loop pole is at $\omega_u=g_{m1}/C=3.85\times10^7$ rad/s, with $g_{m1}=10\ \mu\mathrm A/26\ \mathrm{mV}$. The output then tracks the sine closely. Tracking fails once the sine's slope magnitude $\omega\hat V|\cos\omega t|$ rises to $SR$. Measuring the phase $\theta$ from a peak, the slope magnitude is $\omega\hat V\sin\theta$, so tracking ends at
$$
\sin\theta=\frac{SR}{\omega\hat V}=\frac{2}{2.83}=0.707,\qquad \theta=45^\circ,
$$
at $V_i=\hat V\cos45^\circ=\pm7.07$ V. In time, this is $T/8=2.78$ μs after the peak, where $T=1/f=22.2$ μs.

### Step 3 — The slewing ramp and where it rejoins

From $+7.07$ V at $t_0=T/4+T/8=8.33$ μs, the output falls at $2$ V/μs:
$$
V_o(t)=7.07\ \mathrm V-\left(2\ \mathrm{V/\mu s}\right)(t-t_0).
$$
It meets the sine again where $V_o(t)=10\sin\omega t$. Solving numerically gives $t=16.86$ μs and $V_o=-9.98$ V, just 0.19 μs after the negative peak at $3T/4=16.67$ μs. The ramp therefore lasts 8.53 μs and covers 17.06 V. The output then follows the sine through the bottom until $45^\circ$ past the negative peak ($-7.07$ V), and ramps up at $+2$ V/μs. Each half period of 11.1 μs consists of:

| Segment | Duration |
|---|---|
| linear ramp at $\mp2$ V/μs | 8.53 μs |
| tracking the sine around the peak | 2.58 μs |

### Step 4 — Output waveform

The output is close to a triangular wave with rounded tops:

- the period is 22.2 μs;
- the slopes are $\pm2$ V/μs;
- the peaks are still about 10 V, because the output catches up with the sine just after each peak.

A ramp crosses zero $7.07\ \mathrm V/(2\ \mathrm{V/\mu s})=3.54$ μs after leaving the sine, so the output crosses zero about 0.76 μs after the input. A time-step simulation with the full $\tanh$ characteristic of the input pair, $dV_o/dt=SR\tanh\!\left[(V_i-V_o)/2V_T\right]$, gives the same waveform: peak 9.97 V and zero-crossing lag 0.81 μs.

![One period of Vi (10-V, 45-kHz sine, dashed) and Vo (solid): Vo leaves the sine 45° past each peak at ±7.07 V, ramps at ∓2 V/μs, rejoins the sine at about ∓9.98 V just after the opposite peak, peak 9.97 V, zero crossings about 0.8 μs late](/q/G311/solution-waveforms.svg)

The distortion is slew limiting, not clipping: the 10-V amplitude stays well inside the ±15-V supplies.
