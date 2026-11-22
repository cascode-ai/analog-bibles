# Detailed solution - G310

The full-power bandwidth is set by the large-signal slew rate, not by the small-signal frequency response. Find the slew rate of the Miller-compensated circuit, then require that the steepest slope of a 15-V sinusoid not exceed it.

### Step 1 — Slew rate

With the 10-pF Miller capacitor $C$ from the base of $Q_5$ to $V_o$, the second stage holds the base of $Q_5$ almost fixed. All current delivered by the input stage therefore flows through $C$, and $dV_o/dt=i/C$. A large input switches the whole tail current to one side. Through the $Q_3$–$Q_4$ mirror, the current at the output node of the input stage is then $\pm I_{EE}$, so
$$
SR=\frac{I_{EE}}{C}=\frac{20\ \mu\mathrm A}{10\ \mathrm{pF}}=2\times10^6\ \mathrm{V/s}=2\ \mathrm{V/\mu s}.
$$
The output stage does not limit this rate: the 300-μA source and $Q_6$ can supply the 20-μA capacitor current with a wide margin.

### Step 2 — Slope of a full-swing sinusoid

For $V_o=\hat V\sin\omega t$, the slope $dV_o/dt=\omega\hat V\cos\omega t$ peaks at the zero crossings:
$$
\left|\frac{dV_o}{dt}\right|_{\max}=\omega\hat V .
$$
The output is undistorted only while this peak slope is at most $SR$.

### Step 3 — Full-power bandwidth

Setting $\omega\hat V=SR$ with $\hat V=15$ V:
$$
f_{\max}=\frac{SR}{2\pi\hat V}=\frac{2\times10^6\ \mathrm{V/s}}{2\pi\times15\ \mathrm V}=21.2\ \mathrm{kHz}.
$$
This is about 300 times lower than the small-signal unity-gain frequency $g_{m1}/C=6.1$ MHz, where $g_{m1}=10\ \mu\mathrm A/26\ \mathrm{mV}$. Large-swing operation is therefore limited by slewing long before small-signal bandwidth matters.
