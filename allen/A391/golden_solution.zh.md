增益 ≈ 520 V/V（$v_1$ 为同相输入端，$v_2$ 为反相输入端）；$SR^- = 16$ V/µs，$SR^+ = 32$ V/µs。

偏置：M7（2/2）和 M9（8/2）镜像 M10（2/2）：尾电流 20 µA，M9 吸收 80 µA。M5 和 M6（1/4）镜像 M11（4/4）：各 5 µA，注入 M1 和 M2 的漏极。每个输入管流过 10 µA，因此二极管连接负载 M3 和 M4 流过 10 − 5 = 5 µA。M8（64/2）以 16 倍的比例镜像 M4（4/2）：$I_8 = 80\ \mu$A = $I_9$。

增益：只有 M2 一侧驱动输出。$g_{m2} = \sqrt{2\cdot110\cdot5\cdot10}\ \mu\mathrm{S} = 104.9\ \mu$S；M2/M4 节点的电阻 ≈ $1/g_{m4}$，其中 $g_{m4} = \sqrt{2\cdot50\cdot2\cdot5}\ \mu\mathrm{S} = 31.6\ \mu$S；$g_{m8} = \sqrt{2\cdot50\cdot32\cdot80}\ \mu\mathrm{S} = 506\ \mu$S；$r_{ds8}\|r_{ds9} = (1/(0.01\cdot80\ \mu\mathrm{A}))/2 = 625$ kΩ。
$A_v = \dfrac{g_{m2}}{2}\cdot\dfrac{1}{g_{m4}}\cdot g_{m8}\,(r_{ds8}\|r_{ds9}) = 1.66\times316 \approx 524$ V/V（计入 M4 节点处的小电导后 ≈ 520）。

压摆率：$v_1 \ll v_2$ 时，M2 截止，M4 节点电压升高，M8 截止，M9 吸收 80 µA：$SR^- = 80\ \mu\mathrm{A}/5\ \mathrm{pF} = 16$ V/µs。$v_1 \gg v_2$ 时，M2 流过全部 20 µA，其中 M6 提供 5 µA，因此 M4 流过 15 µA，M8 输出 $16\times15 = 240\ \mu$A；净电流 $240-80 = 160\ \mu$A：$SR^+ = 32$ V/µs。
