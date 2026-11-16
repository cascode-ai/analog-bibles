在一个电荷泵锁相环（charge-pump PLL）中，鉴频鉴相器（PFD）的输出 $Q_A$（UP）和 $Q_B$（DOWN）驱动一个具有两条支路的电荷泵：
- UP 支路：PMOS 电流源（current source）$M_2$ 与由 $\overline{Q_A}$ 驱动的 PMOS 开关 $M_4$ 串联，向环路滤波器（loop filter）电容提供电流 $|I_{D4}|$；
- DOWN 支路：NMOS 开关 $M_3$ 由 $Q_{B\Delta}$ 驱动（即经过延迟的 $Q_B$，其延迟与产生 $\overline{Q_A}$ 的反相器相匹配），与 NMOS 电流源 $M_1$ 串联，从电容中抽取电流 $I_{D3}$。

由于 PFD 存在复位通路，即使输入相位差为零，两条支路在每个周期内也会同时导通一段时间 $T_P$。UP 电流与 DOWN 电流存在失配（mismatch）：$|I_{D4}| - I_{D3} = \Delta I$，且 $\Delta I \ll I_{D3} \approx I_P$。[图 1] 给出了由此产生的波形：(a) UP 与 DOWN 脉冲完全对齐时的波形；(b) 环路稳定锁定后的波形。电流失配会转化为 PLL 输入端的相位偏移（phase offset）。借助这些波形，用电流失配表示出该相位偏移。输入周期为 $T_{in}$。
