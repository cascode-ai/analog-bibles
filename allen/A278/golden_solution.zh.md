(1) $z_1 = p_2$ 要求 $R_z - \dfrac{1}{g_{m6A}} = \dfrac{C_L}{g_{m6A}C_c}$，即 $\dfrac{1}{g_{m6B}} = \dfrac{1}{g_{m6A}}\cdot\dfrac{C_c + C_L}{C_c}$。由 $g_{m6B} = \sqrt{2K'_P(W_{6B}/L_{6B})I_8}$ 和 $g_{m6A} = \sqrt{2K'_P(W_{6A}/L_{6A})I_6}$ 得：

$\dfrac{W_{6B}}{L_{6B}} = \dfrac{W_{6A}}{L_{6A}}\cdot\dfrac{I_6}{I_8}\left(\dfrac{C_c}{C_c + C_L}\right)^2$，等价地 $\dfrac{W_{6A}}{L_{6A}} = \dfrac{W_{6B}}{L_{6B}}\cdot\dfrac{I_8}{I_6}\left(\dfrac{C_c + C_L}{C_c}\right)^2$（$I_6 = I_7$）。

(2) 设计：
- $W_{6B}/L_{6B} = 94 \times \dfrac{95}{15} \times \left(\dfrac{3}{13}\right)^2 = 31.7 \approx 32$。
- M8 = M9：与 M5（30 µA 下为 4.5）的 $V_{GS}$ 相同 → $S_8 = S_9 = 4.5 \times 15/30 = 2.25$；M10 = M11 相等（尺寸可任选，例如与 M6B 的电流密度相当），因此 $I_{11} = I_{10} = I_9 = I_8 = 15$ µA。
- $R_z = 1/g_{m6B} = 1/\sqrt{2(50\ \mu)(31.7)(15\ \mu)} = 4.59$ kΩ（$V_{SG6B}$ ≈ 0.84 V）。
- $g_{m6A} = \sqrt{2(50\ \mu)(94)(95\ \mu)} = 945\ \mu$S：$p_2 = -g_{m6A}/C_L = -94.5\times10^6$ rad/s（−15.0 MHz）；$z_1 = -1/[3\ \mathrm p\,(4.59\ \mathrm k - 1.06\ \mathrm k)] = -94.5\times10^6$ rad/s（−15.0 MHz）——零点与 $p_2$ 对消（若 $W_{6B}/L_{6B}$ 取整为 32：$R_z$ = 4.56 kΩ，$z_1$ = −15.1 MHz）。
- 由于 $g_{m6B}$ 和 $g_{m6A}$ 都是 p 沟道平方律跨导，它们的比值——因而对消——能跟踪工艺和温度的变化。
