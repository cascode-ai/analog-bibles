# 详细步骤 - R709

**思路。** 只有一种均匀介质 $\epsilon$ 时，每层单位面积对衬底的电容为 $\epsilon/h$，因此由给定值可以确定金属 3 和金属 4 的高度（以 $\epsilon$ 为单位）。两层金属之间的电容等于 $\epsilon$ 除以它们的间距；而由于金属 4 被金属 3 屏蔽，底极板的寄生电容就是金属 3 自身对衬底的电容。

### 第 1 步 — 由对衬底的电容求各层的高度

由 $C_{sub} = \epsilon/h$，即 $h = \epsilon/C_{sub}$：

$$h_4 = \frac{\epsilon}{C_{sub,4}} = \frac{\epsilon}{7.0\ \mathrm{aF/\mu m^2}}, \qquad h_3 = \frac{\epsilon}{C_{sub,3}} = \frac{\epsilon}{9.0\ \mathrm{aF/\mu m^2}} ,$$

因此电容较小的金属 4 位置较高（$h_4 > h_3$）。

### 第 2 步 — 金属 4 与金属 3 之间的电容

两极板之间隔着厚度为 $h_4 - h_3$ 的同一种介质（忽略各层厚度），因此单位面积电容为

$$C = \frac{\epsilon}{h_4 - h_3} = \frac{\epsilon}{\dfrac{\epsilon}{C_{sub,4}} - \dfrac{\epsilon}{C_{sub,3}}} = \frac{1}{\dfrac{1}{C_{sub,4}} - \dfrac{1}{C_{sub,3}}} .$$

等价地，金属 4 对衬底的电容（没有金属 3 时）是“金属 4 到金属 3 所在平面”与“金属 3 所在平面到衬底”的串联：

$$\frac{1}{C_{sub,4}} = \frac{1}{C} + \frac{1}{C_{sub,3}} \quad\Longrightarrow\quad \frac{1}{C} = \frac{1}{C_{sub,4}} - \frac{1}{C_{sub,3}} .$$

**数值计算：**

$$
\begin{aligned}
\frac{1}{C} &= \frac{1}{7.0} - \frac{1}{9.0}\ \ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} = \frac{9 - 7}{63}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} = \frac{2}{63}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}},\\
C &= \frac{63}{2}\ \mathrm{aF/\mu m^2} = 31.5\ \mathrm{aF/\mu m^2}.
\end{aligned}
$$

$C$ 比两个对衬底的电容都大得多，因为两层金属之间的距离比它们到衬底的距离近得多：$h_4 - h_3 = h_4(1 - 7/9) = 0.22h_4$。

### 第 3 步 — 寄生电容与比值

金属 3 与衬底之间没有任何东西，因此底极板的寄生电容就是给定值：

$$C_P = C_{sub,3} = 9.0\ \mathrm{aF/\mu m^2}.$$

金属 4 向下的每条电场线都终止于金属 3，而后者覆盖了其下方的整个面积（忽略边缘效应），因此上极板被**屏蔽**，对衬底没有电容；它的 7.0 aF/µm² 只在没有金属 3 时才适用。

$$\frac{C_P}{C} = \frac{9.0\ \mathrm{aF/\mu m^2}}{31.5\ \mathrm{aF/\mu m^2}} = 0.286 \approx 0.29 .$$

因此每 1 pF 的有用电容会附带约 0.29 pF 的底极板寄生电容，这就是为什么底极板要接到低阻抗（有驱动）的节点上，也是为什么要采用叠层或交错的多层结构来提高 $C$ 相对于 $C_P$ 的比例。

**示例。** 一个 1 pF 的电容需要 $1000\ \mathrm{fF}/(0.0315\ \mathrm{fF/\mu m^2}) = 31{,}700\ \mu\mathrm{m^2}$（约 178 µm × 178 µm），其 $C_P = 0.0090\ \mathrm{fF/\mu m^2}\times31{,}700\ \mu\mathrm{m^2} \approx 0.29$ pF。

### 结果

单位面积上：

$$C = \frac{1}{1/7.0 - 1/9.0}\ \mathrm{aF/\mu m^2} = 31.5\ \mathrm{aF/\mu m^2}, \qquad C_P = 9.0\ \mathrm{aF/\mu m^2}, \qquad \frac{C_P}{C} \approx 0.29 .$$

**常见错误。** 把 $C$ 当作两个对衬底电容之差（$9 - 7 = 2$ aF/µm²）或之和（$16$ aF/µm²）。介质相同时电容按 $1/h$ 变化，因此相减的应是**倒数**。

**常见错误。** 用金属 4 的 7.0 aF/µm² 作为寄生电容，或把它加到金属 3 的寄生电容上。金属 4 被金属 3 完全屏蔽；只有底极板的 9.0 aF/µm² 是寄生电容。
