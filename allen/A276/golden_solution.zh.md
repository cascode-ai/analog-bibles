$A_v \approx 3.1\times10^3$；$R_{out} = 333$ kΩ；$p_1 \approx -1.4\times10^3$ rad/s（≈ −225 Hz）；GB ≈ 0.70 MHz；SR = 2 V/µs；$P_{diss}$ = 1.4 mW。

- 电流：M7 (1/1) 流过 20 µA；M4 (1/1) 将其镜像为 20 µA 的尾电流；M3 (1/1) 镜像 M8 (2/1) 中 20 µA 的一半，即 10 µA，与 M1 (10 µA) 平衡；M6 (5/1) 吸收 100 µA，M5 (10/1) 在 $V_{SG5} = V_{SG3} = V_{SG8} = 2.33$ V 下流过该电流。
- 第一级（单端输出取自 M1/M3 的漏极；M2 的漏极接 $V_{DD}$）：$g_{m1} = \sqrt{2(24\ \mu)(4)(10\ \mu)} = 43.8\ \mu$S；只有一半差模电流 $g_{m1}v_{in}/2$ 到达输出节点；$R_I = r_{ds1}\|r_{ds3} = 1/[(0.01 + 0.02)(10\ \mu)] = 3.33$ MΩ → $A_1 = (g_{m1}/2)R_I = 73$。
- 第二级：$g_{m5} = \sqrt{2(8\ \mu)(10)(100\ \mu)} = 126.5\ \mu$S，$R_{out} = R_{II} = 1/[(0.02 + 0.01)(100\ \mu)] = 333$ kΩ → $A_2 = 42.2$。
- $A_v = A_1A_2 \approx 3.08\times10^3$（从 M1 所在的 + 输入端看为同相）。（更仔细地取 $R_I = r_{ds3}\|2r_{ds1}$ = 4 MΩ——因为 M1 的源极被 $1/g_{m2}$ 负反馈——得到 ≈ 3.7 × 10³。）
- $p_1 \approx -\dfrac{1}{g_{m5}R_{II}R_IC_c} = -\dfrac{1}{42.2 \times 3.33\ \mathrm M \times 5\ \mathrm p} = -1.42\times10^3$ rad/s（−226 Hz）；用 $(1 + g_{m5}R_{II})$ 代替 $g_{m5}R_{II}$：−1.39 × 10³ rad/s。
- $GB = \dfrac{g_{m1}/2}{C_c} = \dfrac{21.9\ \mu}{5\ \mathrm p} = 4.38\times10^6$ rad/s = 0.70 MHz。
- SR：第一级输出节点可由 M3 的 10 µA 充电（M1 截止），或由 $20 - 10 = 10$ µA 放电（M1 承担全部尾电流），因此 SR $= 10\ \mu\mathrm A/5\ \mathrm{pF} = 2$ V/µs。
- $P_{diss} = 10\ \mathrm V \times (20 + 20 + 100)\ \mu\mathrm A = 1.4$ mW。
