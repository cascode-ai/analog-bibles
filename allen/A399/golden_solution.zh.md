$\Delta V_i = 0.01(V_{OH}-V_{OL})$ 时 ≈ 0.44 ns，$\Delta V_i = 0.1(V_{OH}-V_{OL})$ 时 ≈ 0.18 ns（这就是锁存器的传播延迟）。
- $g_m = \sqrt{2\cdot110\cdot10\cdot10}\ \mu\mathrm{S} = 148\ \mu$S；$R = 1/(\lambda I) = 2.5$ MΩ，$g_mR = 370 \gg 1$。
- $C \approx \tfrac23(10\ \mu\mathrm{m})(1\ \mu\mathrm{m})(2.47\ \mathrm{fF/\mu m^2}) = 16.5$ fF；$\tau_L = C/g_m \approx 0.112$ ns。
- $\Delta V_{out}(t) = \Delta V_i\,e^{t/\tau_L}$ → $t = \tau_L\ln\dfrac{0.5(V_{OH}-V_{OL})}{\Delta V_i}$：$\tau_L\ln 50 = 3.91\tau_L = 0.44$ ns；$\tau_L\ln 5 = 1.61\tau_L = 0.18$ ns。
