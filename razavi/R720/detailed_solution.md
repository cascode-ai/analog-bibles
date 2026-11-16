# Detailed solution - R720

**Approach.** The induced voltage, $|v_2|_{peak} = \omega MI_p$, is proportional to the mutual inductance $M$ for a fixed current, so it falls by 4 only if $M$ falls by 4. Write $M$ for long wires above a ground plane (image theory), evaluate it at the present spacing, and solve for the spacing that gives a quarter of it. Because of the logarithm, the answer is not simply "4 times farther apart".

### Step 1 — Mutual inductance of two wires above a ground plane

With $v_2 = M\,di_1/dt = \omega MI_p\cos\omega t$, a fourfold voltage reduction at fixed $\omega$ and $I_p$ needs $M_{new} = M_{old}/4$, and only the spacing $d$ may change. Replacing the ground-plane return by image wires at depth $h$, the per-unit-length mutual inductance is

$$M' = \frac{\mu_0}{2\pi}\ln\frac{\sqrt{d^2 + (2h)^2}}{d} = \frac{\mu_0}{4\pi}\ln\left[1 + \left(\frac{2h}{d}\right)^2\right],$$

with $h = 5$ mm and $\mu_0/4\pi = 0.1$ nH/mm; the argument of the logarithm is the squared ratio of the distance to the image wire to the distance to the other wire.

### Step 2 — Present value ($d = 1$ mm)

$$\frac{2h}{d} = \frac{10\ \mathrm{mm}}{1\ \mathrm{mm}} = 10, \qquad \ln(1 + 10^2) = \ln 101 = 4.615 .$$

$$M'_{old} = 0.1\times4.615 = 0.4615\ \mathrm{nH/mm}, \qquad M_{old} = 0.4615\times4\ \mathrm{mm} = 1.85\ \mathrm{nH}.$$

The induced voltage is $\omega M_{old}I_p = (2\pi\times10^8)(1.85\ \mathrm{nH})(1\ \mathrm{mA}) = 1.16$ mV peak.

### Step 3 — Required spacing

The length (4 mm) and the factor 0.1 nH/mm are common to both cases, so $M_{new} = M_{old}/4$ becomes a condition on the logarithm alone:

$$\ln\left[1 + \left(\frac{2h}{d}\right)^2\right] = \frac{\ln 101}{4} = \frac{4.615}{4} = 1.154 .$$

$$1 + \left(\frac{2h}{d}\right)^2 = e^{1.154} = 3.170 \;\Longrightarrow\; \left(\frac{2h}{d}\right)^2 = 2.170 \;\Longrightarrow\; \frac{2h}{d} = \sqrt{2.170} = 1.473 .$$

With $2h = 10$ mm:

$$d = \frac{10\ \mathrm{mm}}{1.473} = 6.79\ \mathrm{mm}.$$

**Check:** $\ln[1 + (10/6.79)^2] = \ln(1 + 2.170) = \ln 3.170 = 1.154$; $M = 0.1\times1.154\times4 = 0.46$ nH $= 1.85/4$ ✓, and the induced voltage becomes $1.16/4 = 0.29$ mV peak.

### Step 4 — Why the simple approximation fails here

For $d \ll 2h$ the "1" can be dropped, $M' \approx (\mu_0/2\pi)\ln(2h/d) = 0.2\ln(2h/d)$ nH/mm, which would give

$$\ln\frac{10}{d} = \frac{\ln10}{4} \;\Longrightarrow\; \frac{10}{d} = 10^{1/4} = 1.778 \;\Longrightarrow\; d = 5.6\ \mathrm{mm}.$$

But the new spacing is *not* small compared with $2h = 10$ mm ($(2h/d)^2 \approx 2$, not $\gg 1$), so the exact expression must be used, giving 6.8 mm.

Because $M$ depends only logarithmically on the spacing, moving wires apart is an expensive way to reduce coupling: a 4× reduction needs a 6.8× larger spacing, with the wires almost as far from each other as from their images. Coupling falls faster once $d$ becomes comparable to $2h$, where the image current's field cancels that of wire 1 at wire 2.

### Result

$$\ln\left[1 + \left(\frac{10\ \mathrm{mm}}{d}\right)^2\right] = \frac{\ln 101}{4} \;\Longrightarrow\; d \approx 6.8\ \mathrm{mm},$$

which lowers $M$ from 1.85 nH to about 0.46 nH and the induced voltage from 1.16 mV to about 0.29 mV peak.

**Common mistake.** Assuming $M \propto 1/d$ (answer 4 mm) or $M \propto 1/d^2$ (answer 2 mm). $M$ depends on the spacing only through a logarithm, so a much larger change of $d$ is needed.

**Common mistake.** Using $0.2\ln(2h/d)$ without checking it, which gives 5.6 mm. It is valid only for $d \ll 2h$, which the required spacing violates.

**Common mistake.** Reducing the spacing (e.g. to 0.25 mm). Bringing the wires closer *increases* the coupling.
