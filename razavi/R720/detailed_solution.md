# Detailed solution - R720

**Approach.** The induced voltage is $v = M\,di/dt$, so for a fixed current (same amplitude and frequency) it is proportional to the mutual inductance $M$. Reducing the voltage by 4 requires reducing $M$ by 4. We write $M$ for long wires above a ground plane (image theory), evaluate it at the present spacing, and solve for the spacing that gives one quarter of that value. The logarithmic dependence on spacing means the answer is not simply "4 times farther apart".

### Step 1 — The induced voltage is proportional to $M$

For a current $i_1(t) = I_p\sin\omega t$ in wire 1, Faraday's law for coupled conductors gives the voltage across wire 2:

$$v_2(t) = M\frac{di_1}{dt} = \omega MI_p\cos\omega t, \qquad |v_2|_{peak} = \omega MI_p .$$

With $\omega$ and $I_p$ fixed, $|v_2| \propto M$. A fourfold reduction of the voltage needs

$$M_{new} = \frac{M_{old}}{4}.$$

Since all other dimensions (height, length) stay the same, only the spacing $d$ can change.

### Step 2 — Mutual inductance of two wires above a ground plane

Each wire's return current flows in the ground plane, which image theory replaces by an image wire with opposite current at depth $h$ below the plane. The flux of wire 1 and its image linking wire 2's circuit (wire 2 and the plane) gives, per unit length,

$$M' = \frac{\mu_0}{2\pi}\ln\frac{\sqrt{d^2 + (2h)^2}}{d} = \frac{\mu_0}{4\pi}\ln\left[1 + \left(\frac{2h}{d}\right)^2\right],$$

where $d$ is the centre-to-centre spacing, $h = 5$ mm the height and $\mu_0/4\pi = 0.1$ nH/mm. The argument of the logarithm is the squared ratio of the distance to the image wire to the distance to the other wire.

### Step 3 — Present value ($d = 1$ mm)

$$\frac{2h}{d} = \frac{10\ \mathrm{mm}}{1\ \mathrm{mm}} = 10, \qquad \ln(1 + 10^2) = \ln 101 = 4.615 .$$

$$M'_{old} = 0.1\times4.615 = 0.4615\ \mathrm{nH/mm}, \qquad M_{old} = 0.4615\times4\ \mathrm{mm} = 1.85\ \mathrm{nH}.$$

The corresponding induced voltage is $\omega M_{old}I_p = (2\pi\times10^8)(1.85\ \mathrm{nH})(1\ \mathrm{mA}) = 1.16$ mV peak.

### Step 4 — Required spacing

The wire length (4 mm) and the factor 0.1 nH/mm are common to both cases, so the condition $M_{new} = M_{old}/4$ becomes a condition on the logarithm alone:

$$\ln\left[1 + \left(\frac{2h}{d}\right)^2\right] = \frac{\ln 101}{4} = \frac{4.615}{4} = 1.154 .$$

Exponentiate both sides:

$$1 + \left(\frac{2h}{d}\right)^2 = e^{1.154} = 3.170 .$$

Subtract 1:

$$\left(\frac{2h}{d}\right)^2 = 2.170 .$$

Take the square root:

$$\frac{2h}{d} = \sqrt{2.170} = 1.473 .$$

Solve for $d$ with $2h = 10$ mm:

$$d = \frac{10\ \mathrm{mm}}{1.473} = 6.79\ \mathrm{mm}.$$

**Check:** $\ln[1 + (10/6.79)^2] = \ln(1 + 2.170) = \ln 3.170 = 1.154$; $M = 0.1\times1.154\times4 = 0.46$ nH $= 1.85/4$ ✓, and the induced voltage becomes $1.16/4 = 0.29$ mV peak.

### Step 5 — Why the simple approximation fails here

When $d \ll 2h$, the "1" in the logarithm can be dropped and $M' \approx (\mu_0/2\pi)\ln(2h/d) = 0.2\ln(2h/d)$ nH/mm. Using it here would give

$$\ln\frac{10}{d} = \frac{\ln10}{4} \;\Longrightarrow\; \frac{10}{d} = 10^{1/4} = 1.778 \;\Longrightarrow\; d = 5.6\ \mathrm{mm}.$$

But the new spacing (several millimetres) is *not* small compared with $2h = 10$ mm, so the dropped "1" is no longer negligible ($(2h/d)^2 \approx 2$, not $\gg 1$). The exact long-wire expression must be used, giving 6.8 mm.

**Physical intuition.** Because $M$ depends only logarithmically on the spacing, moving the wires apart is an expensive way to reduce coupling: a 4× reduction requires a 6.8× larger spacing, i.e. wires almost as far from each other as from their images. Coupling falls faster once $d$ becomes comparable to $2h$, because then the image current's field cancels that of wire 1 at wire 2.

### Result

$$\ln\left[1 + \left(\frac{10\ \mathrm{mm}}{d}\right)^2\right] = \frac{\ln 101}{4} \;\Longrightarrow\; d \approx 6.8\ \mathrm{mm},$$

which lowers $M$ from 1.85 nH to about 0.46 nH and the induced voltage from 1.16 mV to about 0.29 mV peak.

**Common mistake.** Assuming $M \propto 1/d$ (answer 4 mm) or $M \propto 1/d^2$ (answer 2 mm). The mutual inductance of long wires depends on the spacing only through a logarithm, so a much larger change of $d$ is needed.

**Common mistake.** Using the approximation $0.2\ln(2h/d)$ without checking it, which gives 5.6 mm. It is valid only for $d \ll 2h$, and the required spacing violates that condition.

**Common mistake.** Reducing the spacing (e.g. to 0.25 mm). Bringing the wires closer *increases* the coupling; the voltage falls only when they are moved apart.
