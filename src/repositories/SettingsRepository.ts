import { EntityRepository, Repository } from 'typeorm'
import { Settings } from '../entities/Settings'
// take the entities end export like
// absorve like one repository entity end export like Repository
@EntityRepository(Settings)
class SettingsRepository extends Repository<Settings> {}
export { SettingsRepository }
